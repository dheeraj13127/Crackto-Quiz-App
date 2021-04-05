import React, { useContext, useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'


function LoginUser() {

  const history=useHistory()
  const M=window.M
  const [details,setDetails]=useState({email:"",password:""})
  const [getEmail,setGetEmail]=useState('')
  const [getPassword,setGetPassword]=useState('')
  useEffect(()=>{
    let data=localStorage.getItem("EMAIL")
    setGetEmail(data)
    let data1=localStorage.getItem("PASSWORD")
    setGetPassword(data1)
 
  },[getEmail,getPassword])


 const onhandleSubmit=(e)=>{
  e.preventDefault()
   if(details.email===""||details.password===""){
    M.toast({html: 'Please fill in the fields'})
   }
   else if(details.email!==getEmail){
    M.toast({html: 'Email is invalid!'})
   }
   else if(details.password!==getPassword){
    M.toast({html: 'Password is invalid!'})
   }
   else{
    
    history.push("/dashboard")
   }
     
   
 }
  return (
    <div className="container loginUserContainer">
      <div className="row">
        <div className="col s12 l12">
        <div className="center col l6 offset-l3 s12" >
             <h4 className="white darken-4" style={{borderRadius:"20px"}}>LOGIN</h4>
           </div>
           <div className="col l6 s12 offset-l3" style={{marginTop:"10px",border:"1px solid white",padding:"10px"}}>
           <form className="col s12" autoComplete="off" noValidate onSubmit={onhandleSubmit}>
      <div className="row">
        
        <div className="input-field col s12">
        <i className="material-icons prefix">email</i>
          <input placeholder="Email" id="email" type="email" className="validate"  onChange={e=>setDetails({...details,email:e.target.value})} value={details.email}/>
        </div>
        <div className="input-field col s12">
        <i className="material-icons prefix">visibility</i>
          <input placeholder="Password" id="password" type="password" className="validate"  onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}/>
        </div>
      </div>
      <div className="center-align">
        <button type="submit" className="btn">SIGN UP</button>
      </div>
      <div className="center-align"style={{marginTop:"8px"}}>
        <a href="/register" className="black-text">Don't have an account?</a>
      </div>
      </form>
           </div>
        
        </div>
      </div>
    </div>
  )
}

export default LoginUser
