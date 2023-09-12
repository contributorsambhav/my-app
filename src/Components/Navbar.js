import React from 'react'

export default function Navbar(props) {
  return (
    
<div className="App">
      <div className="navbar">
        <nav>
          <ul>
            <li><a href="/">{props.title}</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </nav>
</div>
</div>

  )
}


