import React from "react";
import '../App.css'


function Menu(props) {
      
    return (
        <li>
           <a href={props.href}>{props.name}</a>
        </li>
    );
}
export default Menu;