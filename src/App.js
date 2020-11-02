import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

// Default text shown in React was the old version of React with class
// components where now we use more functional components (with functions).

const App = () => {

  const APP_ID = "a79d8426";
  const APP_KEY = "bb8e9ddaefa3eedd238a71a97ffca727";
  // Usually APP ID and APP KEY are hidden

  const [recipes, setRecipes] = useState([]);
  const [search,setSearch] = useState(''); 
  const [query,setQuery] = useState('chicken');

  useEffect(() =>{
    getRecipes();
  },[query]);

  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits); 
    console.log(data.hits);
  };
// The get request above could have been written traditionally (shown below) but this 
// way was a bit easier to read 

//  fetch(https://api.edamam.com)
    // .then(response => {
    //   response.json
    // })

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
     e.preventDefault();
     setQuery(search);
     setSearch('');
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label} 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))};
      </div>
    </div>
  );
}

export default App;
