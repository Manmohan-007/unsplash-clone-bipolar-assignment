import React, { Component } from 'react'
import axios from "axios" ; 
import InfiniteScroll from 'react-infinite-scroll-component'; 
import classes from "./new.module.css" 
import ImgComponent from "../ImgComponent/ImgComponent"
export class NewCollection extends Component { 

  state = {
     ImgData2 : [] ,

     page : 1 , count : 30 
  }

 

AccessKey = process.env.ACCESS_KEY || "b3gLUBBl4M-f1so7xhT6fOb0ii7QDbKJPIW4IMQq47g" ; 

componentDidMount=()=>{
      
     
    
      axios.get(`https://api.unsplash.com/collections/139386/photos?client_id=${this.AccessKey}`,
      { params: {   per_page : this.state.count} } 
      )
       .then(response =>{
           
          this.setState({ImgData2 : [...response.data]})
         
          
    
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
        
        axios.get(`https://api.unsplash.com/collections/139386/photos?client_id=${this.AccessKey}`,
        { params: {  page : this.state.page ,  per_page : 30  } } 
        )
         .then(response =>{
              
           const updated = this.state.ImgData2.concat(response.data)   
           this.setState({ImgData2 : updated})
         
          
         }) 
         .catch ( err =>{
            
          console.log("Call Failed") ; 
      
         }) ;
    }  
      
  
   


    render() { 
        
        
        return ( 
            <InfiniteScroll
            dataLength = {this.state.ImgData2.length} 
            next = {this.fetchdata} 
            hasMore ={true} 
            loader = {<h4>Loading...</h4>}
            >
            <div className = {classes.MainImgDivWrapper} >
                             {
                    this.state.ImgData2.map(item=>{ 
                  
                        
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

export default NewCollection ; 
