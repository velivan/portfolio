import React from "react";
import { Link } from "react-router-dom";
import Langue from "../../langue/Langue";
import lang from '../../langue/CheckLangue';
import Navlink from "./Navlink";
import a from './navlink.css'

const Nav = () =>{
    return(
        <div>
        <Navlink name={lang() ? "Home Page" : "Домашня сторінка"} link="/"/>
        <Navlink name={lang() ? "One Page" : "Перша сторінка"} link="Pageone"/>
        <Navlink name={lang() ? "Two Page" : "Друга сторінка"} link="Pagetwo"/>
        <Langue />
        </div>
        
    )
}
export default Nav