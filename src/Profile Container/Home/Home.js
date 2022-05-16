import React from 'react';
import Typical from 'react-typical';
import './Home.css';


function Home() {    
  return (  
  <div className='home-container' id='home-container'>
      <div className='home-parent'>
            <div className='home-details'>
                <div className='social-icons'>
                    <a href="https://www.linkedin.com/in/yazharasu-a">
                        <i className='fa fa-linkedin-square fa-lg' />
                    </a>
                    <a href="https://github.com/yazharasu">
                        <i className='fa fa-github fa-lg' />
                    </a>
                    <a href="https://www.facebook.com/yazh.udt">
                        <i className='fa fa-facebook-square fa-lg' />
                    </a>
                    <a href="https://www.instagram.com">
                        <i className='fa fa-instagram fa-lg' />
                    </a>
                </div>
                <div className='home-welcome'>
                    Hello, I'm <span className='home-name'>Yazharasu 👋 </span>
                </div>
                <div className='home-skillset-ani'>
                    <h1>
                        <Typical
                            loop={Infinity}
                            steps={ [ 
                                "Full Stack Developer", 1000,
                                "React Developer", 1000,
                                "MERN Stack Developer", 1000,
                                "Back End Developer", 1000
                            ]} 
                        />
                    </h1>
                </div>
                <div className='home-skills'>
                    <span> I'm a Full Stack(MERN) Web Developer. 
                    I have diverse set of skill sets ranging from HTML, CSS, Bootstrap, JavaScript, React, Redux, Node.js, Express & mongoDB. 
                    </span>
                </div>
                <div className='home-buttons'>
                    <a href='#contact-cotainer'>   
                        <button className='button hire-btn'>Contact me</button>
                    </a>
                    <a href='../Assets/Resume/yazharasu.pdf' download='yazharasu.pdf'>
                        <button className='button resume-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-pic'>
                <div className='profile-pic-bg'>
                    
                </div>
            </div>         
      </div>
  </div>
  )
}

export default Home;


