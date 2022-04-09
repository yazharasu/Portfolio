import React, {useState, useContext} from 'react';
import './Projects.css';
import ProjectContext from '../../Context/ProjectContext';


function Projects( ) {
    const ProjectCon = useContext(ProjectContext);
    const {_, setProjectWindow} = ProjectCon ;

  return (
    <div className='projects-main-container'>
        
    <div className='projects-container'>
        <div className='project-title'>  
            Pepuls - Social Media App
        </div> 
        <div className='project-image img1'> 

        </div>
        <div className='project-other-details'> 
            <div className='icons'>
                <div className='icon' onClick={ () => setProjectWindow(true) } >View more</div>
                <a className='icon' href="" >Visit Site</a>
                <a className='icon' href="" >View Github</a>
            </div>
        </div>
    </div>
    <div className='projects-container'>
        <div className='project-title'> 
            Trip Advisor App
        </div> 
        <div className='project-image img2'> 

        </div>
        <div className='project-other-details'> 
            <div className='icons'>
                <div className='icon'>View more</div>
                <a className='icon' href="https://ourtraveladvisor.netlify.app/" >Visit Site</a>
                <a className='icon' href="https://github.com/yazharasu/TravelApp" >View Github</a>
            </div>
        </div>
    </div>
    <div className='projects-container'>
        <div className='project-title'> 
            Crypto App
        </div> 
        <div className='project-image img3'> 

        </div>
        <div className='project-other-details'> 
            <div className='icons'>
                <div className='icon'>View more</div>
                <a className='icon' href="https://cryptapp.netlify.app/" >Visit Site</a>
                <a className='icon' href="https://github.com/yazharasu/CryptoApp" >View Github</a>
            </div>
        </div>
    </div>
    <div className='projects-container'>
        <div className='project-title'> 
            Personal Portfolio
        </div> 
        <div className='project-image img4'> 

        </div>
        <div className='project-other-details'> 
            <div className='icons'>
                <div className='icon'>View more</div>
                <a className='icon' href="https://yaazhtailors.netlify.app/" >Visit Site</a>
                <a className='icon' href="https://github.com/yazharasu/yaazh-shop" >View Github</a>
            </div>
        </div>
    </div>
    <div className='projects-container'>
        <div className='project-title'> 
            Tailoring Shop Website
        </div> 
        <div className='project-image img5'> 

        </div>
        <div className='project-other-details'> 
            <div className='icons'>
                <div className='icon'>View more</div>
                <a className='icon' href="https://yaazhtailors.netlify.app/" >Visit Site</a>
                <a className='icon' href="https://github.com/yazharasu/yaazh-shop" >View Github</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Projects;

