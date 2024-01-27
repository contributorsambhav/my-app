// import AboutUs from "./Components/AboutUs";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";


// import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Navbar title = "Title"></Navbar> */}
      {/* <Router>
        <Navbar title="TextUtils" />

        <Switch>

          <Route exact path="/about" component = {AboutUs}/>
           
          <Route exact path="/">
            <Textform></Textform>
          </Route>
            

        </Switch>
      </Router> */}
      <Navbar title = "TextUtils"></Navbar>
      <Textform></Textform>

    </>
  );
}

export default App;
