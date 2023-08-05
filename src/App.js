import { Routes, Route ,useLocation} from 'react-router-dom';
import './App.scss';
import Particles from "react-tsparticles";
import particles from './utils.js/particles';
import {loadFull} from "tsparticles";
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Portfolio from './containers/portfolio'
import Skills from './containers/skills';
import Contact from './containers/contact';
import Navbar from './components/navbar';

function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async(main)=>{
    await loadFull(main)
  }

  const renderParticlejsInHomePage = location.pathname === "/";
  return (
    <div className="App">
    {
      renderParticlejsInHomePage && 
       <Particles id="particles" options={particles} init={handleInit}/>
    }
   
    <Navbar/>
    <div className='App__main-page-content'>
    <Routes>
        <Route index path='/' element={<Home />} />
        <Route index path='/about' element={<About />} />
        <Route index path='/resume' element={<Resume />} />
        <Route index path='/skills' element={<Skills />} />
        <Route index path='/portfolio' element={<Portfolio />} />
        <Route index path='/contact' element={<Contact />} />

      </Routes>
    </div>
      
    </div>
  );
}

export default App;
