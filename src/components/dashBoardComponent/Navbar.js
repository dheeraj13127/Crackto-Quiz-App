import React, { Component } from 'react'
import cracks from '../../media/dim2m.jpg'

export class Navbar extends Component {
  constructor(props){
    super(props)
    this.state={
      cracksData:0,
      src:"",
      pname:""
    }
  }

  componentDidMount(){
   
      
      let data=localStorage.getItem('cracks')
      this.setState({cracksData:data})
      let data1=localStorage.getItem("FILE")
      this.setState({src:data1})
    let data2=localStorage.getItem("NAME")
    this.setState({pname:data2})
    const M=window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems,{});
    });
   
    
   console.log(this.state.cracksData)
  }



  render() {

    return (
      <div>
        <nav className="z-depth-1">
        <div className="nav-wrapper black">
      <a href="" className="brand-logo center"><span className="purple-text darken-4">C</span>ra<span className="purple-text darken-4">c</span>kt<span className="purple-text darken-4">o</span></a>
      <a href="" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right"> <li style={{marginRight:"10px"}}><div className="chip"><img src={cracks} alt=""/>{!this.state.cracksData?0:this.state.cracksData}</div></li></ul>
      <ul className="right hide-on-med-and-down">
      <li style={{marginRight:"10px"}}><div className="chip"><img src={this.state.src} alt=""/>{this.state.pname}</div></li>
        <li><a href="/help">Help</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/dashboard">Home</a></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav black" id="mobile-demo">
  <li style={{marginTop:"10px",marginLeft:"25px"}}><div className="chip"><img src={this.state.src} alt=""/>{this.state.pname}</div></li>
  <li ><a href="/help" className="white-text">Help</a></li>
  <li><a href="/about" className="white-text">About</a></li>
  <li><a href="/dashboard" className="white-text">Home</a></li>
    
  </ul>
    </div>
    )
  }
}


export default Navbar 
