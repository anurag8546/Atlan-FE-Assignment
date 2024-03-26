
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ModelList from './components/ModelList';
import FeaturedModels from './components/FeaturedModels';
import ModelDetails from './components/ModelDetails';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';

function App() {

  return (        
   <Router>
   <Header/>
   <div className='main-content'>
      <Routes>
            <Route path="/" element={ <ModelList/>}/> 
            <Route path="/featured" element = { <FeaturedModels/>}/>
            <Route path="/model/:id" element={<ModelDetails />} />
          
      </Routes>
      
    </div>
    </Router>
    
  );
}

export default App;
