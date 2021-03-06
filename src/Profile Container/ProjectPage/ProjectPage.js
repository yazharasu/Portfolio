import React, {useContext} from 'react';
import './ProjectPage.css';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import ProjectContext from '../../Context/ProjectContext';


function ProjectPage( ) {
    const ProjectCon = useContext(ProjectContext);
    const setProjectWindow = ProjectCon.setProjectWindow;
    const projectWindow = ProjectCon.projectWindow;

  return (
    <div className='project-page-main-container' style={{ visibility: projectWindow ? "visible" : "hidden", opacity: projectWindow ? "1" : "0" }}>
        <div className='project-page-container'>

            <CloseIcon className='project-page-close' onClick={ () => setProjectWindow(false) } />
            <div className='project-image-container'>
                <div className='project-page-image img1'> </div>
                <div className='icons-image'>
                    <a className='icon-image' href="https://ourtraveladvisor.netlify.app/" ><WebIcon />Visit site</a>
                    <a className='icon-image' href="https://github.com/yazharasu/TravelApp" ><GitHubIcon />View code</a>
                </div>
            </div>

            <div className='project-page-subcontainer'>

                <div className='project-page-title'> 
                    Pepuls - Social Media App
                    <hr />
                </div> 

                <div className='project-page-tech'> 
                    <div>Technologies / Libraries Used:</div> Html, CSS, moment, React, React Hooks, React Router, Express, Multer, Mongoose, mongoDB and more...
                </div> <br />

                <div className='project-page-details'> 
                    Pepuls is a full fledged social media application.
                    Front end is build using React, React Hooks, React Router and React Reducer. 
                    Back end is build using Express. Multer is used for handling images. 
                    Database used is mongoDB. <br /><br />

                    Check the application using the following link.
                </div>
            </div> 
        </div>
    </div>
  )
}

export default ProjectPage;
