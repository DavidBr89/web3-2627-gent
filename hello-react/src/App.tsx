// import { Fragment } from "react";
import "./App.css";

import Button from "./Button";
import Home from "./Home";

function App() {
  const imageUrl =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.B89JFviebUWHqx55l28wEQHaE7%3Fpid%3DApi&f=1&ipt=84297ee7259d50d9f510bca2e2b014ed73115683c12655fdae512e24cacf4a76&ipo=images";

  return (
    <>
      <Home imageUrl={imageUrl} />
      <div id="details" className="aDiv">
        <h2>Web 3</h2>
        <p>David Breckx</p>
      </div>
      <Button imageUrl={imageUrl}>Klik mij vanuit APP</Button>
    </>
  );
}

export default App;
