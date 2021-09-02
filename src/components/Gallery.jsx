import { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import { CloseRounded } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";

const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState("");
  const [tempPic, setTempPic] = useState({});
  const { doc, deleteDoc } = useFirestore("personal");

  const ImageHandler = (imgSrc) => {
    setModal(true);
    setTempImg(imgSrc.url);
    setTempPic(imgSrc);
  };

  const handleClick = (e) => {
    e.target.classList.contains("modal") && setModal(false);
  };

  const deleteImg = (imgID) => {
    deleteDoc(imgID);
    setModal(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={modal ? "modal open" : "modal"}
        onClick={handleClick}
      >
        <motion.img src={tempImg} alt="Selected" />
        <CloseRounded className="closeIcon" onClick={() => setModal(false)} />
        <DeleteIcon
          className="deleteIcon"
          onClick={() => deleteImg(tempPic.id)}
        />
      </motion.div>
      <div className="gallery">
        {doc &&
          doc.map((item, id) => {
            return (
              <motion.div
                whileHover={{ opacity: 1 }}
                layout
                className="imgs"
                key={id}
                onClick={() => ImageHandler(item)}
              >
                <motion.img
                  src={item.url}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  alt="Random"
                  style={{ width: "100%" }}
                />
              </motion.div>
            );
          })}
      </div>
    </>
  );
};

export default Gallery;
