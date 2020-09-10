import React from 'react'
import classes from "./Trending.module.css" 
import {Link} from "react-router-dom"
export default function Trending() { 

   

    return (
        <div className = {classes.TrendingWrapperMain}>
              
      <div className = {classes.TrendingWrapper}  >
      <Link className={classes.Hyperlink} to ={"/Trending"}  >  
           <div className= {classes.TrendingWrapperChild}>Trending</div>   
      </Link>
      <Link className={classes.Hyperlink} to ={"/new"}  >  
           <div className= {classes.TrendingWrapperChild}>New </div>  
      </Link>    
      <Link className={classes.Hyperlink} to ={"/following"}  >    
           <div className= {classes.TrendingWrapperChild}>Following</div>   
      </Link>  
      </div> 
   
      <div> 
     
      <i className={`fas fa-grip-lines ${classes.icon1}`}></i> 
      <i className={`fas fa-th-large ${classes.icon2}`}></i>
     
      </div> 
        </div>
    )
}

