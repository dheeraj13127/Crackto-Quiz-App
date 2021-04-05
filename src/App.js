import React,{useEffect, useState} from 'react'
import './App.css'
import {QuizContext} from './components/helpers/Contexts'
import {BrowserRouter as Router,Route, Switch,Redirect} from 'react-router-dom'
import Dashboard from './Dashboard'
import Level1Cric from './components/level1Components/Level1Cric'
import Level1Avengers from './components/level1Components/Level1Avnegers'
import Level1Politics from './components/level1Components/Level1Politics'
import Level1CricResult from './components/level1Components/level1Results/Level1CricResult'
import Level1AvengersResult from './components/level1Components/level1Results/Level1AvengersResult'
import Level1PoliticsResult from './components/level1Components/level1Results/Level1PoliticsResult'
import Level2Sports from './components/level2Components/Level2Sports'
import Level2Movies from './components/level2Components/Level2Movies'
import Level2Tech from './components/level2Components/Level2Tech'
import Level2SportsResult from './components/level2Components/Level2Results/Level2SportsResult'
import Level2MoviesResult from './components/level2Components/Level2Results/Level2MoviesResult'
import Level2TechResult from './components/level2Components/Level2Results/Level2TechResult'
import Level3Sports from './components/level3Components/Level3Sports'
import Level3Movies from './components/level3Components/Level3Movies'
import Level3Tech from './components/level3Components/Level3Tech'
import Level3SportsResult from './components/level3Components/Level3Results/Level3SportsResult'
import Level3TechResult from './components/level3Components/Level3Results/Level3TechResult'
import Level3MoviesResult from './components/level3Components/Level3Results/Level3MoviesResult'
import Help from './navbarcomponents/Help'
import About from './navbarcomponents/About'
import Login from './components/authentication/Login'
import LoginUser from './components/authentication/LoginUser'
import RegisterUser from './components/authentication/RegisterUser'
import Final from './Final'
function App() {
  
 const [score,setScore]=useState(0)
//  const [authenticated,setAuthenticated]=useState(false)

//  const login=()=>{
//    setAuthenticated(true)
//    console.log("loki")
//    localStorage.setItem("auth",true)
//    let data=localStorage.getItem("auth")
//    setAuthenticated(data)
//  }
//  const logout=()=>{
//    setAuthenticated(false)
//    console.log("thor")
//  }
  return (
    <div>
      <QuizContext.Provider value={{score,setScore}}>
      <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/login" exact component={LoginUser}/>
          <Route path="/register" exact component={RegisterUser}/>
          {/* <ProtectedRoute isAuthenticated={authenticated} path="/dashboard" logout={logout} component={Dashboard}/> */}
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/help" exact component={Help}/>
        <Route path="/about" exact component={About}/>
        <Route path="/level1/1" exact component={Level1Cric}/>
        <Route path="/level1/2" exact component={Level1Avengers}/>
        <Route path="/level1/3" exact component={Level1Politics}/>
        <Route path="/level1/1/result" exact component={Level1CricResult}/>
        <Route path="/level1/2/result" exact component={Level1AvengersResult}/>
        <Route path="/level1/3/result" exact component={Level1PoliticsResult}/>
        <Route path="/level2/1" exact component={Level2Sports}/>
        <Route path="/level2/2" exact component={Level2Movies}/>
        <Route path="/level2/3" exact component={Level2Tech}/>
        <Route path="/level2/1/result" exact component={Level2SportsResult}/>
        <Route path="/level2/2/result" exact component={Level2MoviesResult}/>
        <Route path="/level2/3/result" exact component={Level2TechResult}/>
        <Route path="/level3/1" exact component={Level3Sports}/>
        <Route path="/level3/2" exact component={Level3Movies}/>
        <Route path="/level3/3" exact component={Level3Tech}/>
        <Route path="/level3/1/result" exact component={Level3SportsResult}/>
        <Route path="/level3/2/result" exact component={Level3MoviesResult}/>
        <Route path="/level3/3/result" exact component={Level3TechResult}/>
        <Route path="/final" exact component={Final}/>
        </Switch>
      </Router>
      </QuizContext.Provider>
      
    </div>
  )
}

export default App
