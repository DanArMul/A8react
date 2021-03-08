import React, {Component} from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './recipe.css';
import data from './recipes.json';

class Recipe extends Component {
    render (){
        return (
            <div>
                {data.Recipes.map((recipeDetail)=>{
                    return <div class= 'foodRecipes'>
                    <img src={recipeDetail.picture} width='500' height='500' class='img img-response img-rounded img-thumbnail'></img>
                    <h1>{recipeDetail.item}</h1>
                    <p>Main Ingredients: {recipeDetail.ingredients}</p>
                    <p>KCal: {recipeDetail.kcal}</p>
                    </div>
                })}

            </div>    
        )
    }
}

export default Recipe;