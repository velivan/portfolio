import React from "react";
import langue from '../langue/CheckLangue';

const Pageone = () =>{
    return(
        <div>
        <h1>
        {langue()  ? "Page 1": "Сторінка 1"}
        </h1>

        </div>
        
    )
}
export default Pageone