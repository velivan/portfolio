import React from "react";
function checkLangue(){
    let lan = localStorage.getItem("langue")
    console.log(`now set ${lan}`)
    if (lan === `EN`){
        console.log("set En")
        return true
    }else{
        console.log("set Ua")
        return false
    }
    
}
export default checkLangue