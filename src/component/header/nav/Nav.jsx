import React from "react";
import { Link } from "react-router-dom";
import Langue from "../../langue/Langue";
import lang from '../../langue/CheckLangue';
import Navlink from "./Navlink";

const Nav = () =>{
    return(
        <div>
        <Navlink id="1" name={lang() ? "Home Page" : "Домашня сторінка"} link="/"/>
        <Navlink id="1" name={lang() ? "One Page" : "Перша сторінка"} link="Pageone"/>
        <Navlink id="2" name={lang() ? "Two Page" : "Друга сторінка"} link="Pagetwo"/>
        <Langue />
        </div>
        
    )
}
export default Nav