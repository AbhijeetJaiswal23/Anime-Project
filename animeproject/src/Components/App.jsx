import React, { useEffect, useState } from 'react';
import '../CSS/App.css'
import Search from './Search';
import Header from './Header';
import Landing from './Landing';
import axios from 'axios';



const App=()=>{

    
    const [TopAnime,SetTopAnime]=useState([]);
    const [results,Setresults]=useState([]);
    const [resultActive,setresultActive]=useState(false);
    const [quote,setRandomquote]=useState('');
    // top anime list 


    useEffect(()=>{

        const response=async ()=>{
            
            const {data}=await axios.get('https://api.jikan.moe/v4/top/anime',{
                params:{
                    page:1,
                    limit:6
                }
            });

            console.log("Anime :: ",data.data);
            SetTopAnime(data.data);
            
        }

        const response1=async ()=>{

            const {data}=await axios.get('https://animechan.vercel.app/api/random');

            console.log("quote--",data);
            setRandomquote(data);
        }
        response();
        response1();


      
    },[])
    
    //get another random quote

    const GetAnotherquote=()=>{

        const response=async ()=>{

            const {data}=await axios.get('https://animechan.vercel.app/api/random');

            
            setRandomquote(data);
        }

        response();

    }

    // Search Again Function

   const SearchAgain=((e)=>{

        console.log("Yooo searching it again,mah man")

        setresultActive(false);
        Setresults([]);
       
   });

   // Sending API Request

   const searchAnime=((e)=>{

        // console.log("Yo Yo Yo...searching for ", e);
        const response=async()=>{

            const {data}=await axios.get('https://api.jikan.moe/v4/anime',{

                params:{
                    page:1,
                    q:e,
                    order_by:"favorites",
                    

                }
            });

           
            Setresults(data.data);
            // console.log("search result is ",data);

            setresultActive(true);
        }

        response();

        
    });
   

    
    return(

        <div className='app'>

            {/* header section */}
            <Header 
                
                title={"Anni-MAE"} 
                description={"Welcome to The world of Anime"}

            />

              {/* Search Section */}

            <Search searchAnime={searchAnime} 
                    results={results}
                    resultActive={resultActive}
                    SearchAgain={SearchAgain}
            />
            {/* Landing Section */}

            <Landing TopAnime={TopAnime}
                     title='Top Anime Of All Time'
            />

          
        

   

        </div>
    )

}

export default App;