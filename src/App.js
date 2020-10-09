import React, {useEffect, useState} from 'react';
import './App.css';

// Default text shown in React was the old version of React with class
// components where now we use more functional components (with functions).

const App = () => {

  const APP_ID = "a79d8426";
  const APP_KEY = "bb8e9ddaefa3eedd238a71a97ffca727";
  // Usually APP ID and APP KEY are hidden

  useEffect(() =>{
    getRecipes();
  },[]);

  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  }
// The get request above could have been written traditionally but this way was 
// a bit easier to read

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
