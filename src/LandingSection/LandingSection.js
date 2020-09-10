import React, { Component } from 'react'
import classes from './LandingSection.module.css';

export class LandingSection extends Component {
   
   
    render() {
        return (
            <div className = {classes.LandingSectionWrapper}> 
              
               <h1>Unsplash</h1> 
                <p>Beautiful, free photos</p>
               
                <p>Gifted by the world's most generous community of photographers.<i className={`fas fa-gift ${classes.giftIcon}`}></i></p>
                <div className={classes.SearchBarWrapper}>
                <input className={classes.inputbox} type="text" placeholder = "Search free high-resolution photos"/>
                <i className={`fas fa-search`}></i>
                <button>Search</button> 
                </div>
                <p><span className={classes.lightspan}>Trending searches : </span> business , computer , nature , love , house </p>  
            </div>
        )
    }
}

export default LandingSection ; 
