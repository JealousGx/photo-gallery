import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import useFirestore from "./hooks/useFirestore";
import Gallery from "./components/Gallery";
import Upload from "./components/Upload";
import Login from "./components/Login/Login";

function App() {
  const [user, setUser] = useState(false);
  const { doc } = useFirestore("personal");
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      {user ? (
        <div>
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
      ) : (
        <Switch>
          <Route exact path="/">
            <Login user={user} setUser={setUser} />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
