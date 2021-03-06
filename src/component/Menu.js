import React from "react";
import '../App.css'
import MenuItem from "./MenuItem";



function DropMenu(props) {
    let itemName=["a","b","c","b","da","dw","e","adw","wda"];
    let menuItems = [];
    for (var i = 1; i <= props.num; i++) {
        menuItems.push(<MenuItem name={props.name + "-"} num={itemName[i]}></MenuItem>);
    }

    return (
        <li>
            <a href={props.href}>{props.name}</a>
            <ul>{menuItems}</ul>
        </li>
    );
}
export default DropMenu;