import React,{useEffect, useState,useContext} from 'react'
import '../../App.css'
import dash from '../../media/dashboard1.jpeg'
import {QuizContext} from '../helpers/Contexts'
import Navbar from './Navbar'
import NextLevel from './NextLevel'
import NextLevel2 from './NextLevel2'
import NextLevel3 from './NextLevel3'
import {withRouter} from 'react-router-dom'
function DashboardData() {
  const M=window.M
  const [pbv1,setpbv1]=useState(0)
  const [pbv2,setpbv2]=useState(0)
  const [pbv3,setpbv3]=useState(0)
 const [cracks,setCracks]=useState(0)
 
  useEffect(()=>{
    let data=localStorage.getItem('pbv1')
    setpbv1(data)
    let data1=localStorage.getItem('cracks')
    setCracks(data1)
    let data3=localStorage.getItem('pbv2')
    setpbv2(data3)
    let data4=localStorage.getItem('pbv3')
    setpbv3(data4)
    
  },[pbv1,cracks,pbv2,pbv3])
 
  const requireCracks=()=>{
    M.toast({html: 'Need 150 cracks to unlock!', classes: 'rounded'});
  }
  const requireCracks1=()=>{
    M.toast({html: 'Need 450 cracks to unlock!', classes: 'rounded'});
  }
 
  return (
    <div>
    <Navbar/>
    <div className="container dashboardContainer">
    <div className="row">
      <div className="col s12 l12">
        <h5 className="center-align white-text black" style={{border:"0.5px solid white",borderRadius:"15px",padding:"12px"}}>Hey Cracker lets test your CRA<span className="purple-text darken-4">Q</span>!</h5>
         <div className="center-align">
           <h5 className="dashHeader">Select The Level</h5>
         </div>
        <div className="dashboardCard col s12 l12 hoverable">
          <div className="col s6 l2 dashboardCardGlass center-align hoverable" >
            <p className="white-text" style={{fontSize:"20px"}}>Level 1</p>
           <i className="fas fa-bolt dashboardCardThunderFont" style={{fontSize:"28px"}}></i>
          </div>
          <div className="col s6 l8" >
            <p className="white-text center-align">You need to crack 3 levels to proceed</p>
          <div className="progress">
           <div className="determinate black" style={{width:`${pbv1}%`}}></div>
            </div>
            
            <NextLevel/>
          
          </div>
        </div>
        <div className="dashboardCard col s12 l12 hoverable">
        <div className="col s6 l2 dashboardCardGlass center-align hoverable">
            <p className="white-text" style={{fontSize:"20px"}}>Level 2</p>
           <i className="fas fa-bolt dashboardCardThunderFont" style={{fontSize:"28px"}}></i>
           <i className="fas fa-bolt dashboardCardThunderFont" style={{fontSize:"28px",marginLeft:"10px"}}></i>
          </div>
          <div className="col s6 l8">
            <p className="white-text center-align">You need to 150 cracks to unlock level 2!</p>
          <div className="progress">
           <div className="determinate black" style={{width:`${pbv2}%`}}></div>
            </div>
          
         {cracks>=150?<NextLevel2/>:<div className="right-align"><a className="black waves-effect btn-small" onClick={requireCracks}>Crack IT!</a></div>}

        
          </div>
        </div>
        <div className="dashboardCard col s12 l12 hoverable">
        <div className="col s6 l2 dashboardCardGlass center-align hoverable">
            <p className="white-text" style={{fontSize:"20px"}}>Level 3</p>
           <i className="fas fa-bolt dashboardCardThunderFont" style={{fontSize:"28px"}}></i>
           <i className="fas fa-bolt dashboardCardThunderFont" style={{fontSize:"28px",marginLeft:"10px"}}></i>
           <i className="fas fa-bolt dashboardCardThunderFont" style={{fontSize:"28px",marginLeft:"10px"}}></i>
          </div>
          <div className="col s6 l8">
            <p className="white-text center-align">You need to 450 cracks to unlock level 2!</p>
          <div className="progress">
           <div className="determinate black" style={{width:`${pbv3}%`}}></div>
            </div>
            {cracks>=450?<NextLevel3/>:<div className="right-align"><a className="black waves-effect btn-small" onClick={requireCracks1}>Crack IT!</a></div>}
            
          </div>
        </div>
      </div>
    </div>
   </div>
   </div>
  )
}

export default withRouter(DashboardData)
