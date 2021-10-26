import React from "react";
import "../App.css";
import BigMenu from "./BigMenu";

function MainMenu(props) {
    let num = [4, 2, 5, 1, 3, 2];
    let main = [];
    for (var i = 0; i < props.num; i++) {
        main.push(<BigMenu name={props.name + (i + 1)} href="#" num={num[i]}></BigMenu>)
    }

    return (
        < li >
            <a href={props.href}>{props.name}</a>
            <ul>{main}</ul>
        </li >
    );
}

export default MainMenu;