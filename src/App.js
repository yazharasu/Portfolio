import {useState, useReducer} from 'react';
import './App.css';
import ProjectContext from './Context/ProjectContext';
import AboutMe from './Profile Container/About me/aboutme';
import Home from './Profile Container/Home/Home';
import Resume from './Profile Container/Resume/Resume' ;
import Contact from './Profile Container/Contact me/contact';
import Footer from './Profile Container/Footer/Footer';
import Navbarmenu from './Profile Container/Header/Navbarmenu';
import ProjectPage from './Profile Container/ProjectPage/ProjectPage';
import ProjectPage2 from './Profile Container/ProjectPage/ProjectPage_2';
import ProjectPage3 from './Profile Container/ProjectPage/ProjectPage_3';
import ProjectPage4 from './Profile Container/ProjectPage/ProjectPage_4';


function App() {
  const [ projectWindow, setProjectWindow ] = useState(false)

  const initialState = { 
    jsx: <div></div>
  }
  
  const reduce = ( state, action ) => {
    switch(action) {
      case 'projectpage1':
        return {
          jsx: <ProjectPage />
        }
      case 'projectpage2':
        return{
          jsx: <ProjectPage2 />
        }
      case 'projectpage3':
        return {
          jsx: <ProjectPage3 /> 
        }
      case 'projectpage4':
        return {
          jsx: <ProjectPage4 /> 
        }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer( reduce, initialState );

  return (
    <div className="App">
        <ProjectContext.Provider value={ {projectWindow, setProjectWindow, dispatch} } >
        {state.jsx}
        <Navbarmenu />
        <Home />
        <AboutMe />
        <Resume />
        <Contact />
        <Footer />
      </ProjectContext.Provider> 
    </div>
  );
}

export default App;
