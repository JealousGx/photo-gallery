import React, { useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useFireStorage from "../hooks/useFireStorage";

const Progress = ({ chosenFiles, setChosenFiles }) => {
  const { url, completed } = useFireStorage(chosenFiles);
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
