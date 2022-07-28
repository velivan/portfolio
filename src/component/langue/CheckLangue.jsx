import React from "react";
function checkLangue(){
    let lan = localStorage.getItem("langue")
    if (lan === `EN`){
        return true
    }else{
        return false
    }
    
}
export default checkLangue