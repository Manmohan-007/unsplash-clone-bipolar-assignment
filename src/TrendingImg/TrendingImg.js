import React, { Component } from 'react'
import classes from "./TrendingImg.module.css" 
import axios from "axios" ; 
import InfiniteScroll from 'react-infinite-scroll-component'; 
import ImgComponent from "../ImgComponent/ImgComponent"
export class TrendingImg extends Component { 

  state = {
     ImgData : [] ,

     page : 1 , count : 30 
  }

 

AccessKey = process.env.ACCESS_KEY || "b3gLUBBl4M-f1so7xhT6fOb0ii7QDbKJPIW4IMQq47g" ; 

componentDidMount=()=>{
         
      
      axios.get(`https://api.unsplash.com/collections/1580860/photos?client_id=${this.AccessKey}&orientation=squarish`,
      { params: {   per_page : this.state.count} } 
      )
       .then(response =>{
            
          this.setState({ImgData : [...response.data]})
       
          
    
       }) 
       .catch ( err =>{
          
        console.log("Call Failed") ; 
    
       }) ;
    




    } 
  
    fetchdata =()=>{
        
        const pageupdated = this.state.page+1 ;
        this.setState({
            page : pageupdated
        })
        
        axios.get(`https://api.unsplash.com/collections/1580860/photos?client_id=${this.AccessKey}`,
        { params: {  page : this.state.page ,  per_page : 30  } } 
        )
         .then(response =>{
              
           const updated = this.state.ImgData.concat(response.data)   
           this.setState({ImgData : updated})
         
            
            
         }) 
         .catch ( err =>{
            
          console.log("Call Failed") ; 
      
         }) ;
    }  
      
  
   


    render() { 
        
        return ( 
            <InfiniteScroll
            dataLength = {this.state.ImgData.length} 
            next = {this.fetchdata} 
            hasMore ={true} 
            loader = {<h4>Loading</h4>}
            >
            <div className = {classes.MainImgDivWrapper} >
                             {
                    this.state.ImgData.map(item=>{ 
                  
                        
                        return( 
                  
                    
                        < ImgComponent key={item.id} item = {item.urls.regular} alt = {item.description}/>
                      
                        )}
                        
                )
                }
            </div> 
            </InfiniteScroll>
        )
    }
}

export default TrendingImg ; 
