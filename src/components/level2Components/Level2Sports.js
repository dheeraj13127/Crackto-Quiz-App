import React, { useContext, useEffect, useState } from 'react'
import {levelSportsQuestions} from '../level2Components/Level2QuestionBank/levelSportsQuestions'
import ash from '../../media/ash.jpg'
import ronaldo1 from '../../media/ronaldo1.jpg'
import { QuizContext } from '../helpers/Contexts'
import {useHistory} from 'react-router-dom'
import '../../App.css'
import Navbar from '../dashBoardComponent/Navbar'
function Level2Sports() {
  const M=window.M
  
  let history=useHistory()

  const [score,setScore]=useState(0)
  const [currQues,setCurrQues]=useState(0)
  const [optionChosen,setOptionChosen]=useState("")
  const [finish,setFinish]=useState(false)
  const nextQuestion=()=>{
    
    if(optionChosen===""){
      M.toast({html: 'Choose one of the options!', classes: 'rounded'});
      setCurrQues(currQues)
    }
    else{
      
     if(levelSportsQuestions[currQues].answer===optionChosen){
      setScore(score+1)
      
    }
    setCurrQues(currQues+1)
    setOptionChosen("")
  }
  }
  const finishQuiz=()=>{
    if(levelSportsQuestions[currQues].answer===optionChosen){
      setScore(score+1)
    }
    setFinish(true)
  }
  const checkScore=()=>{
    localStorage.setItem('level1Score',score)
    localStorage.setItem('cracksClaimed',false)
    
    history.push('/level2/1/result')
  }
  return (
    <div>
      <Navbar/>
      <div className="container level2SportsContainer">
      <div className="row">
        <div className="col s12 l12">
          <h5 className="center-align level1CricHead">CHAPTER 1</h5>
          <h5 className="center-align level1CricHeader">CRACK THE SPORTS !</h5>
          <div className="col s12 l12 hoverable">
            <div className="col s12 l12 level1CricCardGlass">
              <div className="center-align white-text">
              <p style={{fontSize:"16px"}}>{levelSportsQuestions[currQues].ques}</p>
              </div>
              {currQues===3&&<div className="center-align"><img src={ash} alt="" className="responsive-img" style={{width:"120px",height:"120px",border:"2px solid white",borderRadius:"5px"}}/></div>}
              {currQues===5&&<div className="center-align"><img src={ronaldo1} alt="" className="responsive-img" style={{width:"120px",height:"120px",border:"2px solid white",borderRadius:"5px"}}/></div>}
              <div  className="center-align" style={{marginTop:"25px"}}>
              <div className="col s12 l6"><p onClick={()=>setOptionChosen("A")} className=" white-text level1Option" style={{border:"1px solid white",padding:"4px",borderRadius:"15px"}}>{levelSportsQuestions[currQues].optionA}</p></div>
              <div className="col s12 l6"><p onClick={()=>setOptionChosen("B")} className=" white-text level1Option" style={{border:"1px solid white",padding:"4px",borderRadius:"15px"}}>{levelSportsQuestions[currQues].optionB}</p></div>
              </div>
              <br/>
              <div className="center-align" style={{marginTop:"40px"}}>
              <div className="col s12 l6"><p onClick={()=>setOptionChosen("C")} className=" white-text level1Option" style={{border:"1px solid white",padding:"4px",borderRadius:"15px"}}>{levelSportsQuestions[currQues].optionC}</p></div>
              <div className="col s12 l6"><p onClick={()=>setOptionChosen("D")} className=" white-text level1Option" style={{border:"1px solid white",padding:"4px",borderRadius:"15px"}}>{levelSportsQuestions[currQues].optionD}</p></div>
              </div>
            </div>
            <div className="col s12 l12 level1CricCardGlass1">
              <div className="">
                {currQues===levelSportsQuestions.length-1?(
                  <p onClick={finishQuiz} className="center-align  white-text green darken-4" style={{border:"1px solid white",padding:"4px",borderRadius:"15px"}}>Finish</p>
                ):<p onClick={nextQuestion} className="center-align  white-text green darken-4" style={{border:"1px solid white",padding:"4px",borderRadius:"15px"}}>Next</p>}
              <div>
                {finish&&<p onClick={checkScore} className="center-align  white-text green darken-4" style={{border:"1px solid white",padding:"4px",borderRadius:"15px"}}>Check Out Score</p>}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Level2Sports

