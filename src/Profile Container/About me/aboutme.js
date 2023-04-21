import React from 'react';
import './aboutme.css'
import yazh from '../Assets/AboutMe/yazh.jpg';
import yazharasu from '../Assets/Resume/yazharasu.pdf';


function AboutMe() {
 
  return (
    <div className='about-me-container' id='about-me-container'>
        <div className='about-me-parent'>
            <div className='about-me-details'>
                <div className='about-me-txt'>
                    <h1>About me 🏷</h1>
                    <p>Why Choose Me?</p>
                </div>

                <div className='about-me-profile'>
                    <div className='about-me'>
                        <p>
                            I'm working as a Software Developer at Iamneo.ai Edutech Pvt. Ltd.
                            I'm a STEM Post graduate professional with experience in engineering and academics.
                            
                            Highly motivated professional looking for opportunities in Organisation which offers 
                            challenging environment to augment my technical and leadership skills.
                        </p>
                        <h3>Profile Highlights...</h3>
                        <ul className='skill-list'>
                           <li>Front End Developement</li>
                            <li>Resposnsive Web Design</li>
                            <li>React and Angular Developement</li>
                            <li>Node.js & Express Backend Developement</li>
                            <li>Experience in leading front-end development team & managing software projects</li>
                        </ul>
                        <div className='home-buttons'>
                            <a href='#contact-cotainer'>   
                                <button className='button aboutme-btn'>Recruit me</button>
                             </a>
                            <a href={yazharasu} download='yazharasu.pdf'>
                                <button className='button resume-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className='about-me-image'>
                        <img src={yazh} height={100} width={100} alt='yazh'></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AboutMe;
