import React from "react";
import "../App.css";
import DropMenu from "./Menu";


function BigMenu(props) {
    let itemnum = [4, 2, 5, 1, 3, 2];
    let bigme = [];
    for (var i = 0; i < props.num; i++) {
        bigme.push(<DropMenu name={props.name + "-" + (i+1)} num={itemnum[i]}></DropMenu>);
    }
    return (
        <li>
            <a href={props.href}>{props.name}</a>
            <ul>{bigme}</ul>
        </li>


    );
}

export default BigMenu;
