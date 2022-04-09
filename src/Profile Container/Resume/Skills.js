import React from 'react';
import html_logo from '../Assets/Resume/html.png';
import node_logo from '../Assets/Resume/node.png';
import react_logo from '../Assets/Resume/react.png';
import express_logo from '../Assets/Resume/express.png';
import mdb_logo from '../Assets/Resume/mdb.png';
import mon_logo from '../Assets/Resume/mongoose.png';
import py_logo from '../Assets/Resume/py.png';


function Skills() {
  return (
    <div className='skills-container'>
        <div className='logo-container'>
            <img src={html_logo } alt='html' width='' height='65'/>
            <img src={react_logo} alt='react' height='70' width='60'/>
            <img src={node_logo} alt='node' height='75' width='75'/>
            <img src={express_logo} alt='express' height='70'  />
            <img src={mdb_logo} alt='mdb' height='70' width='80' />
            <img src={mon_logo} alt='mdb' height='40' width='140' />
            <img src={py_logo} alt='mdb' height='40' />

        </div>

        {/* <div className='skill-parent'>
            <div className='heading-bullet'></div>
            <span>HTML</span>
            <div className='skill-percentage'>
                <div className='active-percentage' style={{width:'80%'}}></div>
            </div>
        </div>

        <div className='skill-parent'>
            <div className='heading-bullet'></div>
            <span>CSS</span>
            <div className='skill-percentage'>
                <div className='active-percentage' style={{width:'75%'}}></div>
            </div>
        </div>

        <div className='skill-parent'>
            <div className='heading-bullet'></div>
            <span>JavaScript</span>
            <div className='skill-percentage'>
                <div className='active-percentage' style={{width:'75%'}}></div>
            </div>
        </div>

        <div className='skill-parent'>
            <div className='heading-bullet'></div>
            <span>React</span>
            <div className='skill-percentage'>
                <div className='active-percentage' style={{width: '70%'}}></div>
            </div>
        </div>

        <div className='skill-parent'>
            <div className='heading-bullet'></div>
            <span>Node JS</span>
            <div className='skill-percentage'>
                <div className='active-percentage' style={{width: '70%'}}></div>
            </div>
        </div>

        <div className='skill-parent'>
            <div className='heading-bullet'></div>
            <span>MongoDB</span>
            <div className='skill-percentage'>
                <div className='active-percentage' style={{width:'75%'}}></div>
            </div>
        </div>

        <div className='skill-parent'>
            <div className='heading-bullet'></div>
            <span>Python</span>
            <div className='skill-percentage'>
                <div className='active-percentage' style={{ width: '80%' }}></div>
            </div>
        </div> */}
    </div>
    )
}

export default Skills;