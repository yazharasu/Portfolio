import React, {useContext} from 'react';
import './ProjectPage.css';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import ProjectContext from '../../Context/ProjectContext';

function ProjectPage2() {
    const ProjectCon = useContext(ProjectContext);
    const setProjectWindow = ProjectCon.setProjectWindow;
    const projectWindow = ProjectCon.projectWindow;


  return (
    <div className='project-page-main-container' style={{ visibility: projectWindow ? "visible" : "hidden", opacity: projectWindow ? "1" : "0" }}>
        <div className='project-page-container'>

            <CloseIcon className='project-page-close' onClick={ () => { setProjectWindow(false) } } />
            <div className='project-image-container'>
                <div className='project-page-image img2'> </div>
                <div className='icons-image'>
                    <a className='icon-image' href="https://ourtraveladvisor.netlify.app/" ><WebIcon />Visit site</a>
                    <a className='icon-image' href="https://github.com/yazharasu/TravelApp" ><GitHubIcon />View Code</a>
                </div>
            </div>

            <div className='project-page-subcontainer'>

                <div className='project-page-title'> 
                    The Trip Advisor App
                    <hr />
                </div> 

                <div className='project-page-tech'> 
                    <div>Technologies / Libraries Used:</div>Material UI, React and React Hooks
                </div> <br />

                <div className='project-page-details'> 
                    The Trip Advisor App is a travel advisor application.
                    Front end is build using Material UI, React and React Hooks. 
                    Google maps and travel-advisor api's from RapidAPI are used.
                    <br /><br />
                
                    Check the application using the following link.
                </div>
            </div> 
        </div>
    </div>
    )
}

export default ProjectPage2;
