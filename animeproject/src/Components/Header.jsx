import React from "react";
import '../CSS/Header.css'
 
import boy1 from '../Assets/boy1.png'

const Header=(props)=>{
 
    return(

        <div className=" header">

            
                <img  className="logo animate__animated animate__backInLeft " src={boy1}
                
                />

                

                <div className="header-right">
                    <div>
                        <p className="headTitle">{props.title}</p>
                    </div>
              
                   

           
                 
                   
                </div>
               
        </div>
       
    )
}

export default Header;