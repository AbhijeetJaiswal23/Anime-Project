import React, { useState } from "react";
import '../CSS/Landing.css';
import Listitem from "./Listitem";


const Landing=(props)=>{

    const RenderedList=props.TopAnime.map((anime)=>{
        
        return (

                <Listitem  anime={anime} />
        )
    })
     

    return(

        <div className="landing">
                
                <div className="landing-header">
                    {props.title}

                </div>
                
                <div className="listitemes">
                    {RenderedList}
                </div>
               

        </div>
       
        
    )
}

export default Landing;