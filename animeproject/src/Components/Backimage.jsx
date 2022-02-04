import React from "react";
import '../CSS/Backimage.css'

const Backimage=(props)=>{

    return(

        <div className="hero">

            <img src={props.url} />

        </div> 
              
        
    )

}

export default Backimage;