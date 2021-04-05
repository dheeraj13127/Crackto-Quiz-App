import '../../App.css'
import React, { Component } from 'react'
import c1 from '../../media/c1.png'
import c2 from '../../media/c2.png'
import c3 from '../../media/c3.png'
export class Login extends Component {
  componentDidMount(){
    const M=window.M
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems,{});
    });
  }
  render() {
    return (
      <div className="container loginContainer">
    <div className="row">
      <div className="col s12 l12">
      <div className="loginCard">
        <div className="center col l6 offset-l3 s12">
        <h4 className="white-text" style={{border:"1px solid white",borderRadius:"15px"}}>Crakto</h4>
        </div>
       <div className="carousel col l6 offset-l3 s12" style={{height:"40vh"}}>
        <a className="carousel-item"><img src={c1} /></a>
        <a className="carousel-item"><img src={c2}/></a>
        <a className="carousel-item"><img src={c3}/></a>
        </div>
        <div className="col s12 l6 center offset-l3" style={{marginTop:"30px"}}>
          <a className="btn btn-waves-effect" href="/login">Login</a>
        </div><br/>
        <div className="col s12 l6 center offset-l3" style={{marginTop:"30px"}}>
          <a className="btn btn-waves-effect" href="/register">Register</a>
        </div>
      </div>
      </div>
    </div>
  </div>
    )
  }
}

export default Login

