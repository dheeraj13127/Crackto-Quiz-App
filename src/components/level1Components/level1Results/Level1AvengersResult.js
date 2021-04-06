import React, { useEffect, useState } from 'react'
import '../../../App.css'
import cracksImg from '../../../media/dim2m.jpg'
import {useHistory} from 'react-router-dom'
import Navbar from '../../dashBoardComponent/Navbar'
function Level1AvengersResult() {
  const M=window.M
  const history=useHistory()
  const [score,setScore]=useState(0)
  const [cracksClaimed,setCracksClaimed]=useState(null)
  useEffect(()=>{
    let data=localStorage.getItem("level1Score")
    setScore(data)
    let data1=localStorage.getItem("cracksClaimed")
    setCracksClaimed(data1)
  },[score,cracksClaimed])
  
  const claimCracks=()=>{
    localStorage.setItem('pbv1',75)
    if(score==5){
      localStorage.setItem('cracks',100)
    }
 
    window.location.reload(false)
    M.toast({html: 'Successfully Claimed'})
    localStorage.setItem("cracksClaimed",true)
  }
  const retryLevel=()=>{
    localStorage.setItem("level1Score",0)
    setScore(0)
    history.push('/level1/2')
  }
  const proceedToChapter2=()=>{
    if(cracksClaimed=="true"){
      localStorage.setItem("level1Score",0)
      setScore(0)
      localStorage.setItem('LevelInc',3)
      localStorage.setItem("cracksClaimed",false)
      history.push('/dashboard')
    }
    else{
      M.toast({html: 'You need to collect the cracks'})
    }
  }
  return (
    <div>
      <Navbar/>
<div className=" container level1CricResultContainer">
      <div className="row">
        <div className="col s12 l12 ">
          <div className="col s12 l12 level1CricResultContainerCard">
            <div className="center-align">
              <h5 className="white-text">You Have Scored: <span className="level1CricResultScore">{score}/5</span></h5>
            </div>
            <div className="center-align" style={{marginTop:"35px"}}>
              {score==5?<div><i className="far fa-laugh-beam level1HappyEmoji"></i><p className="white-text">Wow ! you have successfully cracked Chapter 2</p></div>:<div><i className="far fa-frown level1SadEmoji"></i><p className="white-text">Better luck next time</p></div>}
            
            </div>
            <div className="center-align black" style={{borderRadius:"35px",marginTop:"35px",padding:"10px"}}>
            <p className="white-text" style={{marginTop:'5px'}}>You have earned <span style={{color:"#FFD700"}}>{score==5?50:0}</span> Cracks </p>
            <img src={cracksImg} className="responsive-img" style={{width:"40px",height:"40px"}}></img>
            {score==5?<div>
            <a href="" onClick={claimCracks} className="btn-med yellow darken-3 btn-floating pulse" style={{marginTop:"5px",marginBottom:"8px"}}>Claim</a>
            </div>:''}
            </div>
            {score==5?<div className="center-align" style={{marginTop:"40px"}}><a onClick={proceedToChapter2} className="btn-small yellow darken-3">Unlock Chapter 3</a></div>:<div className="center-align" style={{marginTop:"40px"}}><a onClick={retryLevel} className="btn-small yellow darken-3">Retry Chapter 2</a></div>}

             
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Level1AvengersResult

