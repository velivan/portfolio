import React from "react";
import s from "./navlink.module.css";

function Navlink (props){
    return(
        <div className={s.navlink}>
        <a href={props.link}>{props.name}</a>
        </div>
       
     
    )
}
export default Navlink