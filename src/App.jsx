
import React from 'react';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import PortifolioSection from './components/PortfolioSection';
import ProjectPage from './components/ProjectPage';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Divider from './components/Divider';





const App = () => {

  //return
  return (
    <>

  <Router >

 


      <Routes>


        
      <Route       path="/" 
          element={
            <>
              <HeroSection />
              <Divider />
              <PortifolioSection />
            </>
          }  />
      <Route path="/project/:projectId" element={<ProjectPage />} />

      </Routes>
    </Router>
    <Footer/>
  </>
  );
};

export default App;
