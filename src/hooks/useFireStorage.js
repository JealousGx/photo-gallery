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
        collectionRef.add({ url: downloadUrl, createdAt });
        setUrl(downloadUrl);
      }
    );
  }, [selectedFile]);

  return { completed, url };
};

export default useFireStorage;
