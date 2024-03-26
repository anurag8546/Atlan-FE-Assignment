// ModelCard.js
import React from 'react';
import './model.css'
import { Link } from 'react-router-dom';


function ModelCard({ model }) {
  return (
    <div className="model-card">
        <Link to={`/model/${model.id}`}></Link>
      <p>{model.title}</p>
      <p>{model.description}</p>
    </div>
    
  );
}

export default ModelCard;