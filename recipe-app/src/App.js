import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from './Recipe'

const App = () =>{
  const APP_ID = '7a952bb0';
  const APP_KEY = '9c3d77860210e9a2f14c73710f7b2f6a';

  // const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
 
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState(" ")
  const [query, setQuery] = useState("chicken")

  useEffect ( ()=>{
   getRecipe();
    }, [query]);

 const getRecipe = async ()=> {
     const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json();
      setRecipes(data.hits)
      console.log(data.hits)
 }
  const updateSearch = e => {
    setSearch(e.target.value)
    
  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch(" ")
  }
   
  return (
    <div className="App">
      <form className="container row  ml-1 mt-2" onSubmit={getSearch}>
        <input type="text" className="form-control col-md-5" value={search} onChange={updateSearch}/>
        <button type="submit" className="btn btn-info col-md-1 ml-2">Search</button>
      </form>
      <br/>
     {recipes.map (item => (
       <Recipe key={item.recipe.label} title={item.recipe.label} calories={item.recipe.calories} image={item.recipe.image} ingredients={item.recipe.ingredients}/>
     ))}
    </div>
  )


}


export default App;
