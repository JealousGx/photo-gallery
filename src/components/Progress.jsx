import { useEffect } from "react";
import useFireStorage from "../hooks/useFireStorage";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Progress = ({ chosenFiles, setChosenFiles, collection }) => {
  const { url, completed } = useFireStorage(chosenFiles, collection);
  useEffect(() => {
    if (url) {
      setChosenFiles(null);
    }
  }, [url, setChosenFiles]);
  return (
    <div className="progressbar">
      <CircularProgressbar value={completed} />
    </div>
  );
};

export default Progress;
