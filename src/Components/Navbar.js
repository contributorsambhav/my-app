import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    
<div className="App">
      <div className="navbar ">
        <nav>
          <ul>
            <li><a href="/">{props.title}</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
          <span className="dark justify-end">Dark</span>
        </nav>
</div>
</div>

  )
}

Navbar.propTypes = {title :PropTypes.string.isRequired  }

Navbar.defaultProps={
  title  : "Tiger"
}

