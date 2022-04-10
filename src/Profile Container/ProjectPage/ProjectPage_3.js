import React, {useContext} from 'react';
import './ProjectPage.css';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import ProjectContext from '../../Context/ProjectContext';

function ProjectPage3() {
    const ProjectCon = useContext(ProjectContext);
    const setProjectWindow = ProjectCon.setProjectWindow;
    const projectWindow = ProjectCon.projectWindow;

  return (
    <div className='project-page-main-container' style={{ visibility: projectWindow ? "visible" : "hidden", opacity: projectWindow ? "1" : "0" }}>
        <div className='project-page-container'>

            <CloseIcon className='project-page-close' onClick={ () => { setProjectWindow(false) } } />
            <div className='project-image-container'>
                <div className='project-page-image img3'> </div>
                <div className='icons-image'>
                    <a className='icon-image' href="https://ourtraveladvisor.netlify.app/" ><WebIcon />Visit site</a>
                    <a className='icon-image' href="https://github.com/yazharasu/TravelApp" ><GitHubIcon />View Code</a>
                </div>
            </div>

            <div className='project-page-subcontainer'>

                <div className='project-page-title'> 
                    CryptoUniverse App
                    <hr />
                </div> 

                <div className='project-page-tech'> 
                    <div>Technologies / Libraries Used:</div>Ant Design, React, React Hooks, "react-router-dom, millify, moment and axios
                </div> <br />

                <div className='project-page-details'> 
                    CryptoUniverse App is a crypto details and news application.
                    Front end is build using And Design and React. 
                    Coinranking and Bing news search api's from RapidAPI are used.
                    <br /><br />
                
                    Check the application using the following link.
                </div>
            </div> 
        </div>
    </div>
    )
}

export default ProjectPage3;
