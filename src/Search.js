import React, {Component, useState, useEffect} from 'react';
import Recipe from './Recipe.js';
import './Search.css';
import Favorites from './Favorites.js';


const Search = () => {

	const APP_ID = 'b11d53b9';
	const APP_KEY = '7b14b7d587d0ca76e3e3fa38a302781c';

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("chicken");
	const [favRecipe, setFavRecipe] = useState([]);


		
	useEffect( async () =>{
		getRecipes();			
	}, [query]);

	const getRecipes = async() =>{
		const response = await fetch(`https://protected-waters-53156.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data = await response.json();
		setRecipes(data.hits);
	};

	const updateSearch = e => {
		setSearch(e.target.value);
	}

	const getSearch = e => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	}

	const saveRecipe = async (resep) =>{
		setFavRecipe(favRecipe.concat(resep));
		console.log(resep);
		console.log(favRecipe);
	};


		return(
			<div className = "search">
			<a href ='./Main'>  Back </a>

			<Favorites favRecipes={favRecipe}/>

			<a href ='./Favorites'>  Favorites </a>

			<form onSubmit={getSearch} className="search-form">
				<input className = "search-bar" type='text' value={search} onChange={updateSearch} />
				<button className = 'search-button' type='submit'>Search for recipe!</button>
			</form>
			<div className = "recipes">
				{recipes.map(recipe => (
					<Recipe 
					saveRecipe={saveRecipe}
					singRecipe={recipe.recipe}
					key={recipe.recipe.label}
					title={recipe.recipe.label} 
					calories={recipe.recipe.calories}
					image={recipe.recipe.image}
					ingredients={recipe.recipe.ingredients}
					url={recipe.recipe.url}
					bookmarked={recipe.bookmarked}
					/>
				))}
				;
				</div>
			</div>
		);
	}

export default Search;