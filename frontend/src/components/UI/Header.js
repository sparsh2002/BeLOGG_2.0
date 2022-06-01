import React from 'react'
import '../../../src/styles.css'
function Header() {
  return (
    <div>
        <nav>
            <h1><a href="/">BeLOGG</a></h1>
            <ul>
            <li><a href="/login">Log in</a></li>
            <li><a href="/signup" className="btn">Sign up</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header