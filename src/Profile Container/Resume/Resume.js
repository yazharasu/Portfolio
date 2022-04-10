import React, { useReducer, useState } from 'react';
import './Resume.css'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';
import Education from './education';
import Experience from './Experience';
import Skills from './Skills';
import Projects from '../Projects/Projects';
import Interests from './Interests';

function Resume( { dispatch1 } ) {
    
    const initialState = { 
        jsx: <Projects/>
    }
    
    const reduce = ( state, action ) => {
        switch(action) {
            case 'education':
                return {
                    jsx: <Education />    
                }
            case 'experience':
                return{
                    jsx: <Experience />
                }
            case 'skills':
                return {
                    jsx: <Skills /> 
                }
            case 'projects':
                return {
                    jsx: <Projects dispatch1={dispatch1} /> 
                }
            case 'interests':
                return {
                    jsx: <Interests />
                }
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer( reduce, initialState );
    const [togglestatus, setToggleStatus] = useState(4);
    const toggle = ( stat ) => { 
        setToggleStatus(stat)
    };

    return (
        <div className='resume-cotainer' id='resume-cotainer'>
            
            <div className='resume-details'>
                <div className='resume-title'>
                    <h1>MY RESUME</h1>
                    <p>My formal bio details</p>
                </div>

                <div className='resume-card'> 
                    <div className='resume-bullets'>
                
                        <div className='bullets'>
                            <div className= {togglestatus === 1 ? 'bullet clicked-name':'bullet bullet-name'} onClick={ () => { toggle(1); dispatch('education') } }>
                                <SchoolOutlinedIcon />
                                <div >
                                    Education
                                </div>
                            </div>
                            <div className={togglestatus === 2 ? 'bullet clicked-name':'bullet bullet-name'} onClick={ () => { toggle(2); dispatch('experience') } } >
                                <BusinessCenterOutlinedIcon />
                                <div  >
                                    Experience
                                </div>
                            </div>
                            <div className= {togglestatus === 3 ? 'bullet clicked-name':'bullet bullet-name'} onClick={ () => { toggle(3); dispatch('skills')} } >
                                <TerminalOutlinedIcon />
                                <div  >
                                    Programming Skills
                                </div>
                            </div>
                            <div className= {togglestatus === 4 ? 'bullet clicked-name':'bullet bullet-name'} onClick={ () => { toggle(4); dispatch('projects')} } >
                                <AssignmentOutlinedIcon />
                                <div >
                                    Projects
                                </div>
                            </div>
                            <div className= {togglestatus === 5 ? 'bullet clicked-name':'bullet bullet-name'} onClick={ () => { toggle(5); dispatch('interests') } } >
                                <InterestsOutlinedIcon />
                                <div >
                                    Interests
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='resume-details-container'>
                        {state.jsx}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Resume;
