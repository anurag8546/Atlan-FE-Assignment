// ModelListPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './model.css'
function ModelListPage() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    // Fetch models from mock API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setModels(data));
  }, []);

  return (

    <div>
      <div className='model-heading'> <h3> ✰ Available Models</h3></div>
   
    <div className="model-card-container">
      
    {models.map(model => (
  <div 
    className="model-card" 
    key={model.id} 
    onClick={() => window.location.href=`/model/${model.id}`}
  >
    
    <h3>{model.id}) {model.title}</h3>
     </div>
))}
      
    </div>
  </div>
  );
}

export default ModelListPage;
