import { useState, useEffect } from "react";

import { gallFirestore } from "../components/firebase";

const useFirestore = (collection) => {
  const [doc, setDoc] = useState([]);

  useEffect(() => {
    const detach = gallFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        let document = [];
        snapshot.forEach((doc) => {
          document.push({ ...doc.data(), id: doc.id });
        });
        setDoc(document);
      });
    return () => detach();
  }, [collection]);

  const deleteDoc = (docID) => {
    gallFirestore.collection(collection).doc(docID).delete();
  };

  return { doc, deleteDoc };
};

export default useFirestore;
