import React from 'react';
import logo from './logo.svg';
import './App.css';

// Default text shown in React was the old version of React with class
// components where now we use more functional components (with functions).

const App = () => {

  const APP_ID = "a79d8426";
  const APP_KEY = "bb8e9ddaefa3eedd238a71a97ffca727";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
    

  return(
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
