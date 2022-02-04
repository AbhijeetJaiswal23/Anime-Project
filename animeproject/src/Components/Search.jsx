import React, { useState } from "react";
import SearchResults from "./SearchReasults";
import '../CSS/Search.css';
import boy from '../Assets/boy.png'


const Search=(props)=>{

    const [term,SetTerm]=useState('');

    const Inputischanged=(e)=>{

        SetTerm(e.target.value);
    }

    const onformsubmit=(e)=>{

        e.preventDefault();

        props.searchAnime(term);
    }
    console.log("Yooo inside search and resultsActive is ::::  ", props.resultActive );
    
    if(props.resultActive===true)
    {
        return(

            <div className="search">
                    <SearchResults 
                        results={props.results}
                        SearchAgain={props.SearchAgain}
                    />
            </div>
            
        )
    }
    else
    {
        return(

            <div className="search">
                
                <div className="left" >

               
            
                <div className="row up">

                    <h1 className="search-header">SEARCH ANIME</h1>
                        <div className="col-sm-10">
                            <form onSubmit={onformsubmit} >
                                <input type="text" value={term} onChange={Inputischanged} className="form-control Searchinput" />
                            </form>
                            
                        </div>
                </div>
                

                </div>
               
              


                <img  className="logo" src={boy}/>

            </div>

           
    
    )}

  
}

export default Search;