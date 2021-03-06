import React, {Component, useState, useEffect} from 'react';
import Recipe from './Recipe.js';
import './Search.css';
import Favorites from './Favorites.js';
import Rec from './Rec.js';
import Ingredients from './Ingredients.js';
import Ingr from './Ingr.js';
import Ingretext from './Ingretext.js';
import { Link } from 'react-router-dom';
import { InfoCircleFilled } from '@ant-design/icons';

//

const Search = () => {

	const APP_ID = 'b11d53b9';
	const APP_KEY = '7b14b7d587d0ca76e3e3fa38a302781c';

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("chicken");
	const [favRecipe, setFavRecipe] = useState([]);
	const[totalCal, setCal] = useState(0);
	const[favIngr, setIngr] = useState([]);
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
			//console.log("it hits if");
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
	//	console.log(resep);
		updateIngr(resep);
	};

	const setNewMAX = e =>{
		setMAX(e.target.value);
		console.log(MAX_CAL);
		console.log(e.target.value);
	};

	const updateIngr = async (resep) =>{
		
		const extractRecipe = resep.ingredients;
		//console.log(extractRecipe);
		const arrayLength = extractRecipe.length;
		var newArr = favIngr;
		for (var i = 0; i < arrayLength; i++) {
				var foodCat = extractRecipe[i].foodCategory;
				var testArr = Object.keys(newArr);
				if(testArr.includes(foodCat)){
					newArr[foodCat] = newArr[foodCat].concat(extractRecipe[i].text);
					//console.log(Array.isArray(newArr.foodCat));
				}
				else{
					newArr[foodCat] = [];
					newArr[foodCat] = newArr[foodCat].concat(extractRecipe[i].text);
					console.log('else');
					//console.log(Array.isArray(newArr.foodCat));
				}
				//console.log(Array.isArray(newArr));
				//console.log(newArr);
				//console.log(Array.isArray(favIngr));
				//console.log(favIngr);
				
		}
		setIngr(newArr);
		//var keys = Object.keys(newArr);
		//console.log(newArr);
		//console.log(keys);
		//console.log(favIngr);
	};



		return(
			<div className = "search">
			<a href ='./Main'>  Back </a>
			
			

			<form onSubmit={getSearch} className="search-form">
				<input className = "search-bar" type='text' value={search} onChange={updateSearch} />
				<button className = 'search-button' type='submit'>Search for recipe!</button>
			</form>
			<form className="maxCAL-form">
				<h4>Enter maximum calories: </h4>
				<input  className = "maxCAL-bar" type='number' value= {MAX_CAL} onChange={setNewMAX}/>
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
				
				<div className = "totalCalories">
					<h2 className = 'totalCalText'> Your Total Planned Calorie amount is:</h2>
					<h1 className = 'totalCaloriesCount'> {totalCal}</h1>
				</div>
				<div className = "totalIngredients">
					<Ingredients 
					favIngr={favIngr}
					/>
				</div>
				<h1 className = "favorites-tag"> Favorites </h1>
				<Favorites 
				favRecipe = {favRecipe}
				updateCal = {updateCal}
				/>
			</div>
			
		</div>
		);
	}

export default Search;