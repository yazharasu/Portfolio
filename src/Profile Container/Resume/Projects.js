import React from 'react';

function Projects() {
  return (
    <div className='education resume-main-content'>

        <div className='resume-heading'>
            <div className='main-heading'>
                <div className='bullet'></div>
                <span className='project-title main-heading-content'>Travel Advisor Website</span>
                <div className='year'>2022</div>
            </div>
            <div className='sub-heading'>
                <span className='degree sub-heading-content'><span className='tech'>Technologies Used:</span> JavaScript, React, React Hooks, API & Material-UI</span> 
                <div className='sub-heading-details project-description'>
                    <span>Travel advisor application to provide informations about restaurants, hotels and attractions based on location search/google map.
                        API's from RapidAPI and Goolge maps are used. Check this app here...
                    </span>
                </div>
            </div>
        </div>

        <div className='resume-heading'>
            <div className='main-heading'>
                <div className='bullet'></div>
                <span className='project-title main-heading-content'>Personal Portfolio Website</span>
                <div className='year'>2022</div>
            </div>
            <div className='sub-heading'>
                <span className='degree sub-heading-content'><span className='tech'>Technologies Used:</span> React JS, React Hooks</span> 
                <div className='sub-heading-details project-description'>
                    Single page Personal Portfolio Website build using React.</div>
            </div>
        </div>

        <div className='resume-heading'>
            <div className='main-heading'>
                <div className='bullet'></div>
                <span className='project-title main-heading-content'>Tailor Shop Website</span>
                <div className='year'>2021</div>
            </div>
            <div className='sub-heading'>
                <span className='degree sub-heading-content'><span className='tech'>Technologies Used:</span> JavaScript, React JS, React Hooks</span> 
                <div className='sub-heading-details project-description'>
                    <span>Tailor shop website for showcasing services offered and 
                    end to end shop floor management application to manage the shop activities.</span>
                </div>
            </div>
        </div>

        
    </div>
    )
}

export default Projects;