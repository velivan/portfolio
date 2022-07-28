import React from "react";
import s from "./navlink.module.css";
import a from './navlink.css'
import { NavLink } from "react-router-dom";

function Navlink (props){
    return(
        <div className={s.navlink}>
        <NavLink to={props.link}>{props.name}</NavLink>
            
        </div>
       
     
    )
}
export default Navlink