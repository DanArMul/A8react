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
import favRec from './favRec.js';
import Facebook from './Facebook.js';
import { BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  // <React.StrictMode>
  //   <Add />
  // </React.StrictMode>,
  <BrowserRouter>
  <div>
    <Route path='/Main' component={Main}></Route>
    <Route path='/' exact component={LogIn}></Route>
    <Route path='/Detail' component={Detail}></Route>
    <Route path='/Add' component={Add}></Route>
    <Route path='/Recipe' component={Recipe}></Route>
    <Route path='/Search' component={Search}></Route>
    <Route path='/Favorites' component={Favorites}></Route>
    <Route path='/favRec' component={favRec}></Route>
  </div>
</BrowserRouter>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
