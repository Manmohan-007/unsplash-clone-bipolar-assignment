import React, { Component } from 'react'
import classes from "./TopBar.module.css"
export class TopBar extends Component {
    render() {
        return (
           
            <div className = {classes.TopbarWrapper}> 
            <div className =  {classes.cameraIcon}><i className={`fas fa-camera`}></i></div>
            <div className = {classes.TopbarItemWrapper}>
            <div>Home</div>
            <div>Collections</div> 
            <div>Explore</div> 
            <div className = {classes.dots}>...</div>
            <button className={classes.submitButton}>Submit a photo</button> 
            <svg width="20" height="20" version="1.1" viewBox="0 0 32 32" aria-hidden="false"><path d="M18.9 30.6c-7.4 2.6-14.2 1.4-15.7-2.8-.5-1.5-.2-3.2.8-4.9.5-.8.5-2.1.2-3l-1.4-3.9c-.9-2.6-.7-5.2.3-7.5.7-1.7 2-3.1 3.5-4.1l-.4-1c-.4-1.1.2-2.2 1.3-2.6l1.9-.7c1.1-.4 2.2.2 2.6 1.3l.4 1c2-.2 4.1.3 5.9 1.4 1.9 1.2 3.5 3.1 4.3 5.4l1.4 3.9c.3.8 1.2 1.9 2 2.2 1.8.7 3 1.8 3.6 3.4 1.4 4.2-3.2 9.3-10.7 11.9zm7.3-10.8c-.6-1.7-5.2-2.8-11.3-.7-6.1 2.1-9 5.8-8.4 7.5.6 1.7 5.2 2.8 11.3.7 6.1-2.1 9-5.8 8.4-7.5zm-7.2.8l.1.8c0 1.9-1.1 3.6-2.7 4.4-.6.3-1.3.6-2.1.6h-.1c-1.6 0-2.9-.8-3.9-1.9-.1-.2-.1-.5.1-.6 1.1-.9 2.8-2 5.3-2.8 1-.3 2-.6 2.9-.8.1-.1.3.1.4.3z"></path></svg>
            <img className= {classes.userImage} src = "https://i.guim.co.uk/img/media/fbb1974c1ebbb6bf4c4beae0bb3d9cb93901953c/10_7_2380_1428/master/2380.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=223c0e9582e77253911be07c8cad564f" alt = "uses_image"/>
            </div>
            </div> 
        )
    }
}

export default TopBar ;

    
