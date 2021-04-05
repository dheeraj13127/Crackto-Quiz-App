import React, { useEffect, useState } from 'react'
import Navbar from './components/dashBoardComponent/Navbar'

function Final() {
  const [name,setName]=useState("")
  useEffect(()=>{
    let data=localStorage.getItem("NAME")
      setName(data)
  },[])
  return (
    <div>
      <Navbar/>
          <div className="container finalContainer">
      <div className="row">
        <div className="col s12 l12">
        <h4 className="center-align finalHeader">Congratulations !!!</h4>
        <h6 className="center-align white-text" style={{marginTop:"30px"}}>You are a true champ "{name}" {""}</h6>
        <div style={{marginTop:"20px"}} className="center">
        <i className="fas fa-medal yellow-text darken-2" style={{fontSize:"140px",marginTop:"30px"}}></i>
        </div>
          <div className="center" style={{marginTop:"20px"}}>
            <a href="/dashboard" className="btn btn-waves-effect white black-text">BACK TO HOME</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  
  )
}

export default Final
