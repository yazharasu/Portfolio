import React, {useContext} from 'react';
import './Projects.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import DetailsIcon from '@mui/icons-material/Details';
import ProjectContext from '../../Context/ProjectContext';


function Projects() {
    const ProjectCon = useContext(ProjectContext);
    const setProjectWindow = ProjectCon.setProjectWindow;
    const dispatch = ProjectCon.dispatch;

  return (
    <div className='projects-main-container'>
        
        <div className='projects-container'>
          <div className='projects-container'>
            <div className='project-title'> 
                MyKart Ecommerce App
            </div> 
            <div className='project-image img6'> 

            </div>
            <div className='project-other-details'> 
                <div className='icons'>
                    <div className='icon'  onClick={ () => { setProjectWindow(true); dispatch('projectpage6') } ><DetailsIcon />View more</div>
                    <a className='icon' href="https://myonlinekart.netlify.app/" ><WebIcon />Visit site</a>
                    <a className='icon' href="https://github.com/yazharasu/ecommerce" ><GitHubIcon />View code</a>
                </div>
            </div>
        </div>
        <div className='project-title'>  
            My Blog
        </div> 
        <div className='project-image img7'> 

        </div>
        <div className='project-other-details'> 
            <div className='icons'>
                <div className='icon' onClick={ () => { setProjectWindow(true); dispatch('projectpage5') } } ><DetailsIcon />View more</div>
                <a className='icon' href="https://yazharasublog.netlify.app/"><WebIcon />Visit site</a>
                <a className='icon'  href="https://github.com/yazharasu/myblog" ><GitHubIcon />View code</a>
            </div>
        </div>
    </div>
    
    <div className='projects-container'>
        <div className='project-title'>  
            Pepuls - Social Media App
        </div> 
        <div className='project-image img1'> 

        </div>
        <div className='project-other-details'> 
            <div className='icons'>
                <div className='icon' onClick={ () => { setProjectWindow(true); dispatch('projectpage1') } } ><DetailsIcon />View more</div>
                <a className='icon' href="https://ourtraveladvisor.netlify.app/"><WebIcon />Visit site</a>
                <a className='icon'  href="https://github.com/yazharasu/TravelApp" ><GitHubIcon />View code</a>
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
                <div className='icon' onClick={ () =>{ setProjectWindow(true); dispatch('projectpage2') } } ><DetailsIcon />View more</div>
                <a className='icon' href="https://ourtraveladvisor.netlify.app/" ><WebIcon />Visit site</a>
                <a className='icon' href="https://github.com/yazharasu/TravelApp" ><GitHubIcon />View code</a>
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
                <div className='icon' onClick={ () =>{ setProjectWindow(true); dispatch('projectpage3')}} ><DetailsIcon />View more</div>
                <a className='icon' href="https://cryptapp.netlify.app/" ><WebIcon />Visit site</a>
                <a className='icon' href="https://github.com/yazharasu/CryptoApp" ><GitHubIcon />View code</a>
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
                <div className='icon' onClick={ () => { setProjectWindow(true); dispatch('projectpage4') }} ><DetailsIcon />View more</div>
                <a className='icon' href="https://yaazhtailors.netlify.app/" ><WebIcon />Visit site</a>
                <a className='icon' href="https://github.com/yazharasu/yaazh-shop" ><GitHubIcon />View site</a>
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
                <div className='icon'><DetailsIcon />View more</div>
                <a className='icon' href="https://yaazhtailors.netlify.app/" ><WebIcon />Visit site</a>
                <a className='icon' href="https://github.com/yazharasu/yaazh-shop" ><GitHubIcon />View code</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Projects;
