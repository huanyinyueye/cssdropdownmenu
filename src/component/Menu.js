import React from "react";
import '../App.css'
import MenuItem from "./MenuItem";

function Menu(props) {
        let menuItems = [];
        for (var i = 0; i < props.num; i++) {
                menuItems.push(<MenuItem name = {props.name+"-"} num ={i}></MenuItem>);           
        }
 
    return (
        <li>
            <a href={props.href}>{props.name}</a>
            <ul>{menuItems}</ul>
        </li>
    );
}
export default Menu;