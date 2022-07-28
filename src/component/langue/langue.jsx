import React from "react";
import len from './CheckLangue';

function setDefaultLangue(){
    let langue = len() ? "EN" : "UA"
    return langue
}

function Langue (){
    function setLangue(langue){
        localStorage.removeItem("langue")
        localStorage.setItem('langue', langue);
        window.location.reload()

        
    }
    
    return(
        <select name="langue" value={setDefaultLangue()} onChange={(e) => setLangue(e.target.value)}>
        <option value="EN" key=""><p>EN</p></option>
        <option value="UA" key=""><p>UA</p></option>
        </select>
        
    )
}

export default Langue;
