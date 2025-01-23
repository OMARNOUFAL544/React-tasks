import React from "react";

function Header(props) {
  return (
    <header >
      <h1>{props.title}</h1>
      <nav>
        
          
            <a href={props.hLink}>
              Home
            </a>
          
          
            <a href={props.aLink}>
             |  About
            </a>
         
          
            <a href={props.ctLink}>
             |  Contact
            </a>
          
      </nav>
    </header>
  );
}

export default Header;