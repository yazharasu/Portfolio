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
                        <p>I'm Yazharasu, a creative problem-solver with a diverse background in product design, teaching, and front-end web development. 
                            With 2 years of experience in product design and development and 5 years in teaching, I've honed my ability to think critically, communicate effectively, and collaborate with others to bring ideas to life. 
                            And in the past year, I've been leveraging my skills in HTML, CSS, TailwindCSS, Bootstrap, JavaScript, TypeScript, and React to build dynamic and user-friendly web applications.
                        </p>

                        <p>But my journey to front-end engineering wasn't a straight line. In fact, I first dipped my toes in front-end technologies while teaching for a year, and I fell in love with the creativity and problem-solving involved in building web applications. 
                            I am currently working as a senior software engineer at Iamneo.ai Edutech Pvt Ltd.
                        </p>

                        <p>Whether I'm working on a new project or collaborating with a team, I bring a positive attitude, a thirst for learning, and a commitment to delivering high-quality work. I'm also familiar with tools like Angular, Next.js, node.js, and mongoDB.
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
