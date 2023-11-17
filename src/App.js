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
<Router>
    <Navbar title = "TextUtils" />

    <Switch>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          
          <Route exact path="/">
            <Textform />
          </Route>

        </Switch>

</Router>
  
    
    </>
    
  );
}

export default App;
