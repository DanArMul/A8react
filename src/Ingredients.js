import React, {Component, useState, useEffect} from 'react';
import style from './recipe.module.css';
import Search from './Search.js';
import Ingr from './Ingr.js';
import Ingretext from './Ingretext.js';





const Ingredients = (favIngr) => {
    //console.log(favIngr);
	var data = favIngr.favIngr;
    //console.log(favIngr.favIngr);
   // console.log(data);
    var title = Object.keys(data);
    //console.log(title);

	return(
		<div className ="ingrPage">
            <h1 classnName = {style.shoppingListTag}> Your Shopping List: </h1>
            {title.map(foodCat => (
						<Ingr 
						foodCat = {foodCat}
                        favIngr = {favIngr}
						/>
					))}
		</div>
	);
};

export default Ingredients;