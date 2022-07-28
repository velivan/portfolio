import React from "react";
import s from "./navlink.module.css";
import { Link } from "react-router-dom";

function Navlink (props){
    return(
        <div className={s.navlink}>
        <Link to={props.link}>{props.name}</Link>
            
        </div>
       
     
    )
}
export default Navlink