import React from 'react';

function Education() {
  return (
    <div className='education resume-main-content'>
        <div className='resume-heading'>
            <div className='main-heading'>
                <div className='bullet'></div>
                <span className='institution main-heading-content'>Kumaraguru College of Technology, Coimbatore</span>
                <div className='year'>2014</div>
            </div>
            <div className='sub-heading'>
                <span className='degree sub-heading-content'>M.E in Energy Engineering</span> 
            </div>
        </div>
        <div className='resume-heading'>
            <div className='main-heading'>
                <div className='bullet'></div>
                <span className='institution main-heading-content'>University College of Engineering, Villupuram</span>
                <div className='year'>2012</div>
            </div>
            <div className='sub-heading' >
                <span className='degree sub-heading-content'>B.E in Mechanical Engineering</span> 
            </div>
        </div>
    </div>
    )
}

export default Education;