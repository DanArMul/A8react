import React, {Component, useState, useEffect} from 'react';
import style from './recipe.module.css';
import Search from './Search.js';
import Rec from './Rec.js';





const Favorites = (favRecipe) => {
	//console.log(favRecipe.favRecipe);
	var data = favRecipe.favRecipe;
	data = Array.from(data);
	//console.log(data);

	return(
		<div className ="favePage">
			
			
			<div className = "favRecipes">
					{data.map(recipe => (
						<Rec 
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