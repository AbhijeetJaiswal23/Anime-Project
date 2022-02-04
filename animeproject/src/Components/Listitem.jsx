import React from "react";
import '../CSS/Listitem.css'

const Listitem=(props)=>{


    return(
        <div className="item">
            <img className="img" src={props.anime.images.jpg.image_url}/>
            <div>
            <p className="item-title">{props.anime.title}</p>
            </div>
            
        </div>
    )
    
}

export default Listitem;