import React, {Component, useState, useEffect} from 'react';
import style from './recipe.module.css';
import Search from './Search.js';
import Ingredients from './Ingredients.js';
import Ingretext from './Ingretext.js';


const Ingr = ({foodCat, favIngr}) => {

    var data = favIngr.favIngr;
    var foodCatText = favIngr[foodCat];
    //console.log(foodCatText);
    console.log(data);


	return(
		<div className={style.shoppinglist}>
			<h1>{foodCat}</h1>
            {data[foodCat].map(text => (
						<Ingretext 
						text = {text}
						/>
					))}
           
		</div>
	);
};

export default Ingr;

/**
 *  {data.map(text => (
						<IngrText 
						foodText = {text}
						/>
					))}
 */
