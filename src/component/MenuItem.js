import React from "react";
import "../App.css";



function MenuItem(props) {
  return (
      <li>
        <a href={props.href}>{props.name+" "}{props.num}</a>
      </li>
      
  );
}

export default MenuItem;


