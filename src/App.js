import {useState} from 'react';
import './App.css';
import AboutMe from './Profile Container/About me/aboutme';
import Home from './Profile Container/Home/Home';
import Resume from './Profile Container/Resume/Resume' ;
import Contact from './Profile Container/Contact me/contact';
import Footer from './Profile Container/Footer/Footer';
import Navbarmenu from './Profile Container/Header/Navbarmenu';
import ProjectContext from './Context/ProjectContext';
import ProjectPage from './Profile Container/ProjectPage/ProjectPage';

function App() {
  const [ projectWindow, setProjectWindow ] = useState(false)

  return (
    <div className="App">
      <ProjectContext.Provider value={ {projectWindow, setProjectWindow }} >
      <ProjectPage projectWindow={projectWindow} setProjectWindow={setProjectWindow}/>
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