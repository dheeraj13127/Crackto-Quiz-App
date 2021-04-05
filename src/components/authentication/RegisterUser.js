import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
function RegisterUser() {
  const M=window.M
  const history=useHistory()
  const [details,setDetails]=useState({name:"",email:"",password:"",file:""})
  const [errors,setErrors]=useState("")
  const onSubmitHandler=(e)=>{
    e.preventDefault()
    if(details.name===""||details.email===""||details.password===""||details.file===""){
      M.toast({html:'Please fill in the fields'})
    }
    else{
      localStorage.clear()
      localStorage.setItem("NAME",details.name)
      localStorage.setItem("EMAIL",details.email)
      localStorage.setItem("PASSWORD",details.password)
      localStorage.setItem("FILE",details.file)
      history.push('/login')
    }
    setDetails({...details,name:"",password:"",email:"",file:""})
    

  }
  const onImageChange=(e)=>{
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setDetails({...details,file:e.target.result})
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  return (
    <div className="container registerUserContainer">
      <div className="row">
        <div className="col s12 l12">
           <div className="center col l6 offset-l3 s12" >
             <h4 className="white darken-4" style={{borderRadius:"20px"}}>REGISTER</h4>
           </div>
           <div className="col l6 s12 offset-l3" style={{marginTop:"10px",border:"1px solid white",padding:"10px"}}>
           <form className="col s12" autoComplete="off" noValidate onSubmit={onSubmitHandler}>
      <div className="row">
        <div className="input-field col s12">
        <i className="material-icons prefix">account_circle</i>
          <input placeholder="Name" id="name" type="text" className="validate" onChange={e=>setDetails({...details,name:e.target.value})} value={details.name}/>
          
          
        </div>
        <div className="input-field col s12">
        <i className="material-icons prefix">email</i>
          <input placeholder="Email" id="email" type="email" className="validate"  onChange={e=>setDetails({...details,email:e.target.value})} value={details.email}/>
        </div>
        <div className="input-field col s12">
        <i className="material-icons prefix">visibility</i>
          <input placeholder="Password" id="password" type="password" className="validate"  onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}/>
        </div>
      </div>
      <div className="row">
      <div className="file-field input-field">
      <div className="btn">
        <span>File</span>
        <input type="file"  onChange={onImageChange}/>
      </div>
      <div className="file-path-wrapper">
        <input placeholder="Choose profile picture" id="file" className="file-path validate" type="text" />
      </div>
    </div>
      </div>
      <div className="center-align">
        <button type="submit" className="btn">SIGN UP</button>
      </div>
      <div className="center-align"style={{marginTop:"8px"}}>
        <a href="/login" className="black-text">Already have an account?</a>
      </div>
      </form>
           </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterUser
