import "./App.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Gallery from "./components/Gallery";
import Upload from "./components/Upload";

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="App">
      <h1>jGallery</h1>
      <h2>Pictures & Videos</h2>
      {/* <p>Personal gallery for JealousGx</p> */}
      <Upload />
      <Gallery />
      <div className="scrollTop">
        <ExpandLessIcon onClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
