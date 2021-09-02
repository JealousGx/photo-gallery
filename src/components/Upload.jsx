import { useState } from "react";
import Progress from "./Progress";

const Upload = () => {
  const [chosenFiles, setChosenFiles] = useState(null);
  const [chosenFile, setChosenFile] = useState(null);

  const fileTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
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
  const handleChange = (e) => {
    e.preventDefault();
    let chosen = e.target.files[0];
    if (chosen && fileTypes.includes(chosen.type)) {
      setChosenFiles(chosen);
    }
  };
  return (
    <div>
      <form>
        {chosenFiles ? (
          <Progress chosenFiles={chosenFiles} setChosenFiles={setChosenFiles} />
        ) : (
          <label>
            <input type="file" multiple onChange={handleChange} />
            <span>+</span>
          </label>
        )}
        <div className="selectedFile">{chosenFiles && chosenFiles.name}</div>
      </form>
    </div>
  );
};

export default Upload;
