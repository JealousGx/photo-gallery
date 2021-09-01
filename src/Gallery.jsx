import { useState } from "react";

import Img1 from "./pics/1.jpg";
import Img2 from "./pics/2.jpg";
import Img3 from "./pics/3.jpg";
import Img4 from "./pics/4.jpg";
import Img5 from "./pics/5.jpg";
import Img8 from "./pics/8.jpg";
import Img9 from "./pics/9.jpg";
import Img6 from "./pics/6.jpeg";
import Img7 from "./pics/7.jpeg";
import { CloseRounded } from "@material-ui/icons";

const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState("");

  const data = [
    {
      id: 1,
      Img: Img1,
    },
    {
      id: 2,
      Img: Img2,
    },
    {
      id: 3,
      Img: Img3,
    },
    {
      id: 4,
      Img: Img4,
    },
    {
      id: 5,
      Img: Img5,
    },
    {
      id: 6,
      Img: Img6,
    },
    {
      id: 7,
      Img: Img7,
    },
    {
      id: 8,
      Img: Img8,
    },
    {
      id: 9,
      Img: Img9,
    },
  ];

  const ImageHandler = (imgSrc) => {
    setModal(true);
    setTempImg(imgSrc);
  };

  return (
    <>
      <div className={modal ? "modal open" : "modal"}>
        <img src={tempImg} alt="Selected" />
        <CloseRounded onClick={() => setModal(false)} />
      </div>
      <div className="gallery">
        {data.map((item, id) => {
          return (
            <div
              className="imgs"
              key={id}
              onClick={() => ImageHandler(item.Img)}
            >
              <img src={item.Img} alt="Random" style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
