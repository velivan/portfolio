import React from "react";
import langue from '../langue/CheckLangue';

const Homepage = () =>{
    return(
        <div>
        <h1>
        {langue()  ? "Homepage": "Домашня сторінка"}
        </h1>

        </div>
        
    )
}
export default Homepage