import React from 'react'
import '../App.css'
import Navbar from '../components/dashBoardComponent/Navbar'
import cracks from '../media/dim2m.jpg'
function Help() {
  return (
    <div>
      <Navbar/>
      <div className="container helpContainer">
      <div className="row">
        <div className="col s12 l12" >
          <h4 className="center-align helpHeader">Rules and Gameplay</h4>
          <div className="col s12 l12">
            <h5>- Level 1</h5>
            <p>
              <li>You will be provided with 3 chapters and each of these must be completed to proceed to next level.</li><br/>
              <li>After you successfully complete each chapter you recieve 50 cracks <img alt="" src={cracks} style={{width:"20px",height:"20px",borderRadius:"50px"}}/>.</li><br/>
              <li>Each chapter has 5 questions to be answered.</li><br/>
              <li>At the end of level 1 you must have 150 cracks to unlock level 2.</li>
            </p>
          </div>
          <div className="col s12 l12">
            <h5>- Level 2</h5>
            <p>
              <li>Requires 150 cracks to be unlocked.</li><br/>
              <li>You will be provided with 3 chapters and each of these must be completed to proceed to next level.</li><br/>
              <li>After you successfully complete each chapter you recieve 100 cracks <img alt="" src={cracks} style={{width:"20px",height:"20px",borderRadius:"50px"}}/>.</li><br/>
              <li>Each chapter has 7 questions to be answered.</li><br/>
              <li>At the end of level 2 you must have 450 cracks to unlock level 3.</li>
            </p>
          </div>
          <div className="col s12 l12">
            <h5>- Level 3</h5>
            <p>
              <li>Requires 450 cracks to be unlocked.</li><br/>
              <li>You will be provided with 3 chapters and each of these must be completed to proceed to next level.</li><br/>
              <li>After you successfully complete each chapter you recieve 150 cracks <img alt="" src={cracks} style={{width:"20px",height:"20px",borderRadius:"50px"}}/>.</li><br/>
              <li>Each chapter has 10 questions to be answered.</li><br/> 
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Help
