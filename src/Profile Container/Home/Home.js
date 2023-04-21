import React from 'react';
import Typical from 'react-typical';
import './Home.css';
import yazharasu from '../Assets/Resume/yazharasu.pdf';


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
                                "Front End Developer", 1000,
                                "React Developer", 1000,
                                "Angular Developer", 1000
                            ]} 
                        />
                    </h1>
                </div>
                <div className='home-skills'>
                    <span>I'm a Full Stack Web Developer(front end heavy). 
                    I have diverse set of skill sets ranging from HTML, CSS, TailwindCSS, Bootstrap, JavaScript, React, Redux, Angular, Node.js & mongoDB. 
                    </span>
                </div>
                <div className='home-buttons'>
                    <a href='#contact-cotainer'>   
                        <button className='button hire-btn'>Contact me</button>
                    </a>
                    <a href={yazharasu} download='yazharasu.pdf'>
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


