import React from 'react';
import './index.css';

function Nav(){
    return(
        <nav>
            <h3 className = "titleGo">Go Go Diet</h3>
            <ul className = 'nav-links'>
                <a href ='./Main' className = 'home-nav'>Home</a>
                <a href ='./Search' className = 'recipe-nav'>Recipes</a>
                <a href ='./Add' className = 'add-nav'>Details</a>
             </ul>
        </nav>
    )
}

export default Nav;