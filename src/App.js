import React from 'react';
import './App.css';
import List from './js/components/List';
import Form from './js/components/Form';

function App() {
  return (
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Articles</h2>
        <List />
        <Form />
      </div>
    </div>
  );
}

export default App;
