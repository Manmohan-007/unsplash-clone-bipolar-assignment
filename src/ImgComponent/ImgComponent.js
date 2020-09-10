import React, { Component } from 'react'
import classes from "./ImgComponent.module.css"
export class ImgComponent extends Component {
    render() {
        return (
            <div className ={classes.Imgwrapper1}>
                 <img className={classes.Imgwrapper} src = {this.props.item} alt = {this.props.description}></img>
            </div>
        )
    }
}

export default ImgComponent ; 
