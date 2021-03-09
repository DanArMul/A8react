import React, {Component, useState, useEffect} from 'react';
import style from './recipe.module.css';
import Search from './Search.js';
import Favorites from './Favorites.js';


const Rec = ({title, calories, image,ingredients, url}) => {


	//console.log(title);

	return(
		<div className={style.recipeFav}>
			<h1>{title}</h1>
			<h2>Calories: {Math.round(calories)}</h2>
			<h2>Ingredients:</h2>
			<ol>{ingredients.map(ingredient =>(
				<li>{ingredient.text}</li>
			))}
			</ol>
			<img className = {style.image} src ={image} alt="" />
			<a className = {style.hl} href= {url}>Click here to learn how to cook this!</a>
		</div>
	);
};

export default Rec;
