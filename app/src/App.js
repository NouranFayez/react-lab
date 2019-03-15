import React from 'react';
import './App.css';
// import data from './data';
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
// const App = props=> <MovieList data={data}/>;
// const App = () => <Header/>
const App = () => (
    <Router>
        <>
            <Switch>
                <Route path="/posts/:id" component={DisplayPost} />
                <Route path="/posts" component={PostsList} />
                <Route path="/users/:id" component={DisplayUser} />
                <Route path="/users" component={UsersList} />
                <Route path="/comments/:id" component={CommentPost} />
                <Route path="/userpost/:id" component={DisplayUserPost}/>
                <Route path="/add" component={Add} />

                
                <Route exact path="/" component={Header} />
                {/* <Route path="/topics" component={Topics} /> */}
            </Switch>
        </>
    </Router >
)


export default App;

// class App extends Component {

//   render() {
//     const data=data;
//     return (
//       <div className="App">
//  {   data.map(e=> <Movie {...e}/>)}

//      {/* <Movie {...data} /> */}
//       </div>
//     );
//   }
// }


{/* <div>
            
            <Header/>
            <MovieList data={data}/>
            
            </div>  */}