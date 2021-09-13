import { useState, useEffect } from "react";
import { gallStorage, gallFirestore, timestamp } from "../components/firebase";

const useFireStorage = (selectedFile, collection) => {
  const [completed, setCompleted] = useState(0);
  const [url, setUrl] = useState(null);

  /* eslint-disable */
  useEffect(() => {
    if (collection === false) {
      const collectionRef = gallFirestore.collection("personal");
      selectedFile.map((file) => {
        const storeRef = gallStorage.ref(file.name);
        storeRef.put(file).on(
          "state_changed",
          (snap) => {
            let progressBar = (snap.bytesTransferred / snap.totalBytes) * 100;
            setCompleted(progressBar);
          },
          (err) => {
            console.log(err);
          },
          async () => {
            const downloadUrl = await storeRef.getDownloadURL();
            const createdAt = timestamp();
            const fileType = await file.type;
            const name = await file.name;
            collectionRef.add({
              url: downloadUrl,
              createdAt,
              fileType,
              fileName: name,
              isPrivate: false,
            });
            setUrl(downloadUrl);
          }
        );
      });
    } else if (collection === true) {
      const collectionRef = gallFirestore.collection("personal");
      selectedFile.map((file) => {
        const storeRef = gallStorage.ref(`/private/${file.name}`);
        storeRef.put(file).on(
          "state_changed",
          (snap) => {
            let progressBar = (snap.bytesTransferred / snap.totalBytes) * 100;
            setCompleted(progressBar);
          },
          (err) => {
            console.log(err);
          },
          async () => {
            const downloadUrl = await storeRef.getDownloadURL();
            const createdAt = timestamp();
            const fileType = await file.type;
            const name = await file.name;
            collectionRef.add({
              url: downloadUrl,
              createdAt,
              fileType,
              fileName: name,
              isPrivate: true,
            });
            setUrl(downloadUrl);
          }
        );
      });
    }
  }, [selectedFile, collection]);

  return { completed, url };
};

/* eslint-enable */
export default useFireStorage;
