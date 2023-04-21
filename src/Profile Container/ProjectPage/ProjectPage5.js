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
                <div className='project-page-image img5'> </div>
                <div className='icons-image'>
                    <a className='icon-image' href="https://yazharasublog.netlify.app/" ><WebIcon />Visit site</a>
                    <a className='icon-image' href="https://github.com/yazharasu/myblog" ><GitHubIcon />View code</a>
                </div>
            </div>

            <div className='project-page-subcontainer'>

                <div className='project-page-title'> 
                    My Blog
                    <hr />
                </div> 

                <div className='project-page-tech'> 
                    <div>Technologies / Libraries Used:</div> Html, tailwindCSS, Next.js, React and hygraph for content management
                </div> <br />

                <div className='project-page-details'> 
                    It is a simple blogging app without backend built using Next.js. Hygraph is used for Content content managment<br /><br />

                    Check the application using the following link.
                </div>
            </div> 
        </div>
    </div>
  )
}

export default ProjectPage;
