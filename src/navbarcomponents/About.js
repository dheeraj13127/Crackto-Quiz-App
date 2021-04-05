import React from 'react'
import Navbar from '../components/dashBoardComponent/Navbar'

function About() {
  return (
    <div>
      <Navbar/>
      <div className="container aboutContainer">
      <div className="row">
        <div className="col s12 l12 center-align" style={{padding:"5px"}}>
        <h6>- This web app is designed to provide entertainment and also to test and improve knowledge.</h6><br/>
        <h6>- People of age group 8+ can access this app.</h6><br/>
        <h6>- Authentication is must to access the app</h6>
        </div>
      </div>
    </div>
    <footer className="page-footer" style={{marginTop:"50px"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col s12 l12 center-align">
                                <h5 className="center" style={{marginBottom:"10px"}}>Connect</h5>
                                <ul style={{display:"flex",justifyContent:"space-around",paddingTop:"10px"}}>
                                    <li><a className="white-text btn-floating btn-small" href="https://www.facebook.com/profile.php?id=100040931711341"><i className="fab fa-facebook black"></i></a></li>
                                    <li><a className="white-text btn-floating btn-small" href="https://www.instagram.com/dheeraj_msdian/"><i className="fab fa-instagram black"></i></a></li>
                                    <li><a className="white-text btn-floating btn-small" href="https://twitter.com/Dheeraj38595425"><i className="fab fa-twitter black"></i></a></li>
                                    <li><a className="white-text btn-floating btn-small" href="https://github.com/dheeraj13127"><i className="fab fa-github black"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <h6 className="container center-align black-text">&copy; Crackto</h6>
                    </div>
                </footer>
    </div>
    
  )
}

export default About
