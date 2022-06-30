import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {


  return (
    <div 
      className='nav-bar'
      style={{
        position:'fixed',
        width: '100%',
        height:'50px',
        zIndex:'2',
        backgroundColor: 'white',
      }}
      >
        <ul>
        <Link
                to="/"
                style={{
                  textDecoration:'none',
                  color:'#141414'
                }}
                >
            <li 
              className='nav-name' 
              style={{
                padding: '10px 14px',
                fontSize: '20px',
                width: '150px'
              }}
            >
              Nicholas Yelle
            </li>
              </Link>
            
            <Link to="about"><li>About</li></Link>
            <Link to="thoughts"><li>Thoughts</li></Link>
            <Link to="library"><li>Library</li></Link>
        </ul>
    </div>
  )
}

export default NavBar