import AboutUs from "./Components/AboutUs";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    {/* <Navbar title = "Title"></Navbar> */}
    <Navbar />
    <Textform></Textform>
    <AboutUs />
    </>
    
  );
}

export default App;
