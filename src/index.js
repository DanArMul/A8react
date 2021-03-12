import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LogIn from './LogIn.js';
import Main from './Main.js';
import Detail from './Detail.js';
import Add from './Add.js';
import Recipe from './Recipe.js';
import Search from './Search.js';
import Favorites from './Favorites.js';
import Rec from './Rec.js';
import Facebook from './Facebook.js';
import Nav from './Nav.js';
import Ingredients from './Ingredients.js';
import Ingr from './Ingr.js';
import Ingretext from './Ingretext.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  // <React.StrictMode>
  //   <Add />
  // </React.StrictMode>,
  <Router>
    <div>
      <Nav />
      <Route path='/Main' component={Main}></Route>
      <Route path='/' exact component={LogIn}></Route>
      <Route path='/Detail' component={Detail}></Route>
      <Route path='/Add' component={Add}></Route>
      <Route path='/Recipe' component={Recipe}></Route>
      <Route path='/Search' component={Search}></Route>
      <Route path='/Favorites' component={Favorites}></Route>
      <Route path='/Rec' component={Rec}></Route>
      <Route path='/Ingredients' component={Ingredients}></Route>
      <Route path='/Ingr' component={Ingr}></Route>
      <Route path='/Ingretext' component={Ingretext}></Route>
    </div>
</Router>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
