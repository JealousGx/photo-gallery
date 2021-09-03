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
  const imgTypes = ["image/jpeg", "image/jpg", "image/png"];
  const videoTypes = [
    "video/mp4",
    "video/amv",
    "video/mkv",
    "video/webm",
    "video/avi",
    "video/mov",
    "video/wmv",
    "video/flv",
    "video/avchd",
  ];

  const ImageHandler = (imgSrc) => {
    setModal(true);
    setTempImg(imgSrc.url);
    setTempPic(imgSrc);
  };

  const handleClick = (e) => {
    e.target.classList.contains("modal") && setModal(false);
    if (videoTypes.includes(tempPic.fileType)) {
      const myVid = document.getElementById("vid");
      myVid.pause();
      myVid.currentTime = 0;
    }
  };

  const deleteImg = (imgID, fileName) => {
    deleteDoc(imgID, fileName);
    setModal(false);
  };

  const closeModal = () => {
    if (videoTypes.includes(tempPic.fileType)) {
      const myVid = document.getElementById("vid");
      myVid.pause();
      myVid.currentTime = 0;
    }
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
        {imgTypes.includes(tempPic.fileType) && (
          <motion.img src={tempImg} alt="Selected" />
        )}
        {videoTypes.includes(tempPic.fileType) && (
          <motion.video id="vid" width="100%" height="100%" autoPlay controls>
            <source src={tempImg} type={tempPic.fileType} />
          </motion.video>
        )}
        <CloseRounded className="closeIcon" onClick={closeModal} />
        <DeleteIcon
          className="deleteIcon"
          onClick={() => deleteImg(tempPic.id, tempPic.fileName)}
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
                {videoTypes.includes(item.fileType) && (
                  <motion.video width="100%" height="100%">
                    <source src={item.url} type={item.fileType} />
                  </motion.video>
                )}
                {imgTypes.includes(item.fileType) && (
                  <motion.img
                    src={item.url}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    alt="Random"
                    style={{ width: "100%" }}
                  />
                )}
              </motion.div>
            );
          })}
      </div>
    </>
  );
};

export default Gallery;
