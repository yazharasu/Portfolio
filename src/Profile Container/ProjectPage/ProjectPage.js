import React, {useContext} from 'react';
import './ProjectPage.css';
import CloseIcon from '@mui/icons-material/Close';
import ProjectContext from '../../Context/ProjectContext';


function ProjectPage( ) {
    const ProjectCon = useContext(ProjectContext);
    const {projectWindow, setProjectWindow} = ProjectCon ;


  return (
    <div className='project-page-main-container' style={{ visibility: projectWindow ? "visible" : "hidden", opacity: projectWindow ? "1" : "0" }}>
        <div className='project-page-container'>

            <CloseIcon className='project-page-close' onClick={ () => { setProjectWindow(false) } } />
            <div className='project-image-container'>
                <div className='project-page-image img1'> </div>
                <div className='icons-image'>
                    <a className='icon-image' >Visit Site</a>
                    <a className='icon-image' >View Github</a>
                </div>
            </div>

            <div className='project-page-subcontainer'>

                <div className='project-page-title'> 
                    Pepuls - Social Media App
                    <hr />
                </div> 

                <div className='project-page-tech'> 
                    <div>Technologies Used:</div> Html, CSS, React, React Hooks, React Router, Express, Mongoose, mongoDB
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
