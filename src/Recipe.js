import React, {Component, useState, useEffect} from 'react';
import style from './recipe.module.css';
import Search from './Search.js';


const Recipe = ({title, calories, image,ingredients, url, singRecipe, saveRecipe, onClick}) => {


	return(
		<div className={style.recipe}>
			<h1>{title}</h1>
			<h2>Calories: {Math.round(calories)}</h2>
			<h2>Ingredients:</h2>
			<ol>{ingredients.map(ingredient =>(
				<li>{ingredient.text}</li>
			))}
			</ol>
			<img className = {style.image} src ={image} alt="" />
			<a className = {style.hl} href= {url}>Click here to learn how to cook this!</a>
			<form onClick={() => onClick(singRecipe, Math.round(calories))} className="saveRecipe-form">
				<button className = 'saveRecipe-button' type='button'>Favorite!</button>
			</form>
		</div>
	);
};

export default Recipe;

//Unused functions

//<Favorites bookmarked={bookmarked}/>
//	const [favorite, setFavorite] = useState(false);

//	const toggle = React.useCallback(
//    [favorite, setFavorite],
//  	);
