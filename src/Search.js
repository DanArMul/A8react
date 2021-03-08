import React, {Component, useState, useEffect} from 'react';
import Recipe from './Recipe.js';
import './Search.css';
import Favorites from './Favorites.js';
import Rec from './Rec.js';

//

const Search = () => {

	const APP_ID = 'b11d53b9';
	const APP_KEY = '7b14b7d587d0ca76e3e3fa38a302781c';

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("chicken");
	const [favRecipe, setFavRecipe] = useState([]);
	const[totalCal, setCal] = useState(0);
	const[MIN_CAL, setMIN] = useState(0);
	const[MAX_CAL, setMAX] = useState(0);

		
	useEffect( async () =>{
		getRecipes();			
	}, [query]);

	const getRecipes = async() =>{
		if(MAX_CAL > 0){
			const response = await fetch(`https://protected-waters-53156.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&calories=${MIN_CAL}-${MAX_CAL}`);
			const data = await response.json();
			setRecipes(data.hits);
			console.log("it hits if");
		}
		else{
			const response = await fetch(`https://protected-waters-53156.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
			const data = await response.json();
			setRecipes(data.hits);
			//console.log(data.hits);
		}
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
		const newResp = favRecipe.concat(resep);
		setFavRecipe(newResp);
		//console.log("new Resp:");
		//console.log(newResp);
		//console.log("fav recipe:");
		//console.log(favRecipe);
	};

	const updateCal = async(newCal) =>{
		//console.log(newCal);
		//console.log("set calories:");
		//console.log(newSetCal);
		setCal(totalCal => totalCal+newCal);
		//console.log("total calories:");
		//console.log(totalCal);
		
	};

	const onClick = async(resep, newCal) =>{
		saveRecipe(resep);
		updateCal(newCal);
	};

	const setNewMAX = e =>{
		setMAX(e.target.value);
		console.log(MAX_CAL);
		console.log(e.target.value);
	};


		return(
			<div className = "search">
			<a href ='./Main'>  Back </a>
			
			

			<form onSubmit={getSearch} className="search-form">
				<input className = "search-bar" type='text' value={search} onChange={updateSearch} />
				<button className = 'search-button' type='submit'>Search for recipe!</button>
			</form>
			<form onClick={setNewMAX} className="maxCAL-form">
				<input  className = "maxCAL-bar" type='number' value= {MAX_CAL}/>
				<button className = 'maxCAL-button' type= "button">Max Calories!</button>
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
					onClick = {onClick}
					/>
				))}
				;
				</div>
			<div className= 'favorites'>
				<h1> Favorites </h1>
				<div className = "totalCalories">
					<h2> Your Planned Total Calories is: {totalCal}</h2>
				</div>
				<Favorites 
				favRecipe = {favRecipe}
				updateCal = {updateCal}
				/>
			</div>
		</div>
		);
	}

export default Search;