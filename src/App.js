// App.js
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

  // const [likedModels, setLikedModels] = useState([]);


  // useEffect(() => {
  //   const storedLikedModels = localStorage.getItem('likedModels');
  //   if (storedLikedModels) {
  //     setLikedModels(JSON.parse(storedLikedModels));
  //   }
  // }, []);

  // // Save liked models to local storage whenever it changes
  // useEffect(() => {
  //   localStorage.setItem('likedModels', JSON.stringify(likedModels));
  // }, [likedModels]);

  // const handleLike = (model) => {
  //   // Check if the model is already liked
  //   const isLiked = likedModels.some((likedModel) => likedModel.id === model.id);
  //   if (!isLiked) {
  //     setLikedModels([...likedModels, model]);
  //   }
  // };
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
