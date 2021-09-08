import "./App.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import useFirestore from "./hooks/useFirestore";
import Gallery from "./components/Gallery";
import Upload from "./components/Upload";

function App() {
  const { doc } = useFirestore("personal");
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <div className="topBar">
        <h1>jGallery</h1>
      </div>
      <h2>Pictures & Videos</h2>
      {/* <p>Personal gallery for JealousGx</p> */}

      <Upload />
      {doc.length ? (
        <Gallery />
      ) : (
        <p>
          No pictures and / or videos found.
          <br />
          Upload some...
        </p>
      )}
      {doc.length > 3 && (
        <div className="scrollTop">
          <ExpandLessIcon onClick={handleClick} />
        </div>
      )}
    </div>
  );
}

export default App;
