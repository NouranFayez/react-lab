import React from 'react';
import { Link } from "react-router-dom";


const User = (props)=>{
    return (
        <>
        <div className="users-container">
        <div className="users-list">
            <h3> <span>User Name</span> {props.name}</h3>
            <Link to={`/users/${props.id}`}><h3>View Details</h3></Link>
        
        </div>
        </div>
    </>
    )
}

export default User;