import React from "react";
import lang from './CheckLangue';

function setDefaultLangue(){
    let langue = lang() ? "EN" : "UA"
    return langue
}

function Langue (){
    function setLangue(langue){
        localStorage.removeItem("langue")
        localStorage.setItem('langue', langue);
        window.location.reload()

        
    }
    
    return(
        <select id="sfdvsdvdsfvfv" name="langue" value={setDefaultLangue()} onChange={(e) => setLangue(e.target.value)}>
        <option id="sfdvsfv" value="EN" key=""><p>EN</p></option>
        <option id="vfsfdvcfda" value="UA" key=""><p>UA</p></option>
        </select>
        
    )
}

export default Langue;
