import React from 'react';
import "./index.css"
import classes from './App.module.css';
import TopBar from "./TopBar/TopBar" 
import LandingSection from "./LandingSection/LandingSection"
import Trending from  "./Trending/Trending" 
import { Route,  BrowserRouter ,Switch} from 'react-router-dom';
import TrendingImg from "./TrendingImg/TrendingImg"
import NewCollection from "./New/new" 
import FollowingCollection from "./following/following" 
import NotFoundPage from "./NotfoundPage/NotFound"
function App() { 

 
  return (
    <div className="App">
 
       <BrowserRouter> 
       <div className = {classes.BackgroundWrapper}>
       <TopBar/>
       <LandingSection/>  
       <Trending />
       </div>
       <div className={classes.LastSectionWrapper} >
       <Switch>
        <Route exact path = "/" component = {TrendingImg} /> 
        <Route exact path = "/Trending" component = {TrendingImg} /> 
        <Route exact path = "/New" component = {NewCollection} /> 
        <Route exact path = "/Following" component = {FollowingCollection} /> 
        <Route component = {NotFoundPage}/>
       </Switch>
       </div>
       </BrowserRouter>


    </div>
  );
}

export default App;
