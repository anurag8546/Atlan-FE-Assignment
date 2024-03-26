// ModelDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header.js';

function ModelDetails() {
  const [model, setModel] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch specific model data from mock API
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setModel(data))
      .catch(error => console.error('Error fetching model:', error));
  }, [id]);

  return (
    <div>
      <Header />
      <h1 className='model-heading'>Model Details</h1>
      {model ? (
        <div className='model-div'>
          <h4 className='model-title'>Model Name: <span>{model.title}</span></h4>
  <h4 className='model-id'>Model ID: <span>{model.id}</span></h4>
  <h4 className='model-body'>Description: <span>{model.body}</span></h4>
  <a href={model.link} className='try-now-button'>Try Now</a>
 </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ModelDetails;