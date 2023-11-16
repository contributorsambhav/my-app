import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  const [tgl, setTgl] = useState("Enable Dark mode");
  let count = 0
  function toggleDark() {
    let root = document.getElementById("root");
    console.log(root);
    count += 1 
if (count%2==0){
  root.style.filter = "invert(100%)"
  setTgl("Enable Light mode")
}else{
  root.style.filter = "invert(0%)"
  setTgl("Enable Dark mode")
}  }

  return (
    <div className="App">
      <div className="navbar ">
        <nav>
          <ul>
            <li><a href="/">{props.title}</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
            <li><button className="text-gray-200 ml-[70vh]" onClick={toggleDark}>{tgl}</button></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};


Navbar.defaultProps={
  title  : "Tiger"
}

