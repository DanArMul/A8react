import React, {Component, useState, useEffect} from 'react';
import style from './recipe.module.css';
import Search from './Search.js';
import Ingredients from './Ingredients.js';
import Ingr from './Ingr.js';


const Ingretext = (foodText) => {

	console.log(foodText);

	return(
		<div className={style.shoppingtext}>
			<li>{foodText.text}</li>
		</div>
	);
};

export default Ingretext;
