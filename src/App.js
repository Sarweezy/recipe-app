import React, {useEffect, useState} from 'react';
import './App.css';

// Default text shown in React was the old version of React with class
// components where now we use more functional components (with functions).

const App = () => {

  const APP_ID = "a79d8426";
  const APP_KEY = "bb8e9ddaefa3eedd238a71a97ffca727";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  const [counter,setCounter] = useState(0);

  useEffect(() =>{
    console.log('Effect has been run');
  });

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>

    </div>
  );
}

export default App;
