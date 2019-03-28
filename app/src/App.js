import React from 'react';
import './App.css';
import data from './data';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import PostsList from './Components/Posts/list';
import Header from './Components/header/header';
import DisplayPost from './Components/Posts/display';
import DisplayUser from './Components/Users/displayUser';
import CommentPost from './Components/Posts/commentPost';
import Add from './Components/Posts/add';
import User from './Components/Users/user';
import UsersList from './Components/Users/list';
import MovieList from './Components/Movies/List';
import DisplayUserPost from './Components/Users/displayUserPost';

import Home from './Components/Home/home'


////////////  lab 3
const App = props=> <MovieList data={data}/>;





////////////// lab 4
// const App = () => (
//     <Router>
//         <>
//         <Header/>
//             <Switch>
//                 <Route path="/posts/:id" component={DisplayPost} />
//                 <Route path="/posts" component={PostsList} />
//                 <Route path="/users/:id" component={DisplayUser} />
//                 <Route path="/users" component={UsersList} />
//                 <Route path="/comments/:id" component={CommentPost} />
//                 <Route path="/userpost/:id" component={DisplayUserPost}/>
//                 <Route path="/add" component={Add} />
//             </Switch>
//         </>
//     </Router >
// )



////////////////lab5
// const App =()=>(
// <>
// <Home/>
// </>
// )




export default App;
