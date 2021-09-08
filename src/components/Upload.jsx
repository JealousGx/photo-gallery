import { useState } from "react";
import Progress from "./Progress";

const Upload = () => {
  const [chosenFiles, setChosenFiles] = useState(null);
  const [isPriv, setIsPriv] = useState(false);

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
    let chosens = e.target.files;
    var chosensList = []; // Variable to convert a file into an array
    let files = []; // Variable to add the filtered files to an array
    for (let i = 0; i < chosens.length; i++) {
      chosensList.push(chosens[i]);
    }
    // Filtering the files
    chosensList.map(
      (item) => fileTypes.includes(item.type) && files.push(item)
    );
    if (chosensList) {
      setChosenFiles(chosensList);
    }
  };
  const privClick = (e) => {
    e.preventDefault();
    if (e.target.value === "yes") {
      setIsPriv(true);
    } else {
      setIsPriv(false);
    }
  };

  return (
    <div>
      <form>
        {chosenFiles ? (
          <Progress
            chosenFiles={chosenFiles}
            collection={isPriv}
            setChosenFiles={setChosenFiles}
          />
        ) : (
          <div className="privUpload">
            <label>
              <input
                type="file"
                multiple
                name="files"
                onChange={handleChange}
              />
              <span>+</span>
            </label>
            <div className="privContainer">
              <select name="isPrivate" id="isPrivate" onChange={privClick}>
                <option disabled selected>
                  Private?
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
        )}
        <div className="selectedFile">{chosenFiles && chosenFiles.name}</div>
      </form>
    </div>
  );
};

export default Upload;
