import React, { useState } from 'react';

import PropTypes from 'prop-types';

// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [tgl, setTgl] = useState("Enable Dark mode");
  let count = 0
  function toggleDark() {
    let root = document.getElementById("root");
    console.log(root);
    count += 1 
if (count%2===0){
  root.style.filter = "invert(80%)"
  setTgl("Enable Light mode")
}else{
  root.style.filter = "invert(0%)"
  setTgl("Enable Dark mode")
}
}

  return (
    <div className="App">
      <div className="navbar ">
        <nav class = "h-fit">
          <ul className='flex justify-between '>

            <li className='mx-2 text-xl '>{props.title}</li>
          

            {/* <li><Link to="/">Home</Link></li> */}
            {/* <li><Link to="/about">About</Link></li> */}
            {/* <li><Link to="/contact">Contact</Link></li> */}
            
            <li className ="text-xl"><button className="text-gray-200 rounded-lg bg-gradient-to-r from-slate-900 to-slate-700 px-3 " onClick={toggleDark}>{tgl}</button></li>
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

