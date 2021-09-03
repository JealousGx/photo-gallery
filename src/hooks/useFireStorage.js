import { useState, useEffect } from "react";
import { gallStorage, gallFirestore, timestamp } from "../components/firebase";

const useFireStorage = (selectedFile) => {
  const [completed, setCompleted] = useState(0);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storeRef = gallStorage.ref(selectedFile.name);
    const collectionRef = gallFirestore.collection("personal");
    storeRef.put(selectedFile).on(
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
        const file = await selectedFile.type;
        const name = await selectedFile.name;
        collectionRef.add({
          url: downloadUrl,
          createdAt,
          fileType: file,
          fileName: name,
        });
        setUrl(downloadUrl);
      }
    );
  }, [selectedFile]);

  return { completed, url };
};

export default useFireStorage;
