import React from "react";
import Langue from "../../langue/Langue";
import Navlink from "./Navlink";

const Nav = () =>{
    return(
        <div>
        <Navlink name="link" link="#link"/>
        <Navlink name="hello" link="#hello"/>
        <Navlink name="home" link="#home"/>
        <h1>Nav Bar - Menu</h1>
        <Langue />
        </div>
        
    )
}
export default Nav