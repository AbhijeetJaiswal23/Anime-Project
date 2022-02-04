import React from "react";
import '../CSS/SearchReasults.css'


const SearchResults=(props)=>{
   
    
 
    // console.log("Title is : ",props.results[0].title_english);

    const Genres=props.results[0].genres.map((genre)=>{

        return(

                <div>
                    <button  className=" btn button-class">
                        {genre.name}
                    </button>
                </div>
        )
    });


    const ontryagain=()=>{

        console.log("in try again section..")
        props.SearchAgain();
    }
    if(props.results.length===0)
    {
        return(
            <div>
                <h1>
                oops Try again 
                </h1>
               
            </div>
        )
    }
    else
    {
        return(

            <div className="result-component">
    
                <div className="result-sidebar">
                 
                

                    
                    <img className="result-image" src={props.results[0].images.jpg.image_url}  />
                

                    <div className=" result-smallinfo ">

                        <p>
                            {props.results[0].aired.string}
                        </p>

                        <p>
                            {props.results[0].duration}
                        </p>

                        <p>
                            {props.results[0].episodes} episodes
                        </p>

                    </div>

                    <div className="result-tryagain">

                        <button className=" btn button-class" onClick={ontryagain}>
                            Search Again??
                        </button>
                        
                        <a href={props.results[0].url} target='_blank'>
                            <button  className="btn button-class">
                                Visit
                            </button>
                        </a>

                    </div>

                </div>

                <div className="results-Main">
                    <h1 className="head-Title"> {props.results[0].title_english} 
                    
                    </h1>
                    
                     <div className="synopsis">
                         {props.results[0].synopsis}
                     </div>

                     <div className="result-genre">
                         {Genres}
                     </div>

                </div>

            </div>
        )
    }
   
}

export default SearchResults;