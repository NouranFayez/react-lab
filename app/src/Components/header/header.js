import React from 'react';
import { Link } from "react-router-dom";


export default class Header extends React.Component{
    // constructor(props){
    //     super(props);
    // }


    render(){
        return(
            <>
             <div className="header">
             <div className='logo'>
             <h1>Logo</h1>
             <div className="link-bar">
               <ul>
                    <li>
                       <Link to="/posts" >Posts</Link>
                    </li>
                   <li><Link to="/users" >Users</Link></li>
               </ul>
             </div>
             </div>
             </div>
            </>
        )
    }
}


