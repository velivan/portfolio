import React from "react";
import langue from '../langue/CheckLangue';

const Pagetwo = () =>{
    return(
        <div>
        <h1>
        {langue()  ? "Page 2": "Сторінка 2"}
        </h1>

        </div>
        
    )
}
export default Pagetwo