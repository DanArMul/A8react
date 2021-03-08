import React, {Component, useState, useEffect} from 'react';
import style from './recipe.module.css';
import Search from './Search.js';
import favRec from './favRec.js';





const Favorites = (favRecipe) => {
	
	var data = Array.from(favRecipe);
	console.log(favRecipe);

	return(
	<div className ="favePage">
		<div className = "favRecipes">
				{data.map(recipe => (
					<favRec 
					key={recipe.label}
					title={recipe.label} 
					calories={recipe.calories}
					image={recipe.image}
					ingredients={recipe.ingredients}
					url={recipe.url}
					/>
				))}
		</div>
	</div>
	);
};

export default Favorites;