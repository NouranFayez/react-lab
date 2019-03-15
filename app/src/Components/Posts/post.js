import React from 'react';
import { Link } from "react-router-dom";


const PostCard = (props)=>{
    return (
        
        <>
        <div className="posts-container">
        <div className="posts-list">
            <h3><span>Post Title : </span>{props.title}</h3>
            <Link to={`/posts/${props.id}`}><h3>View Details</h3></Link>
        </div>
        
        </div>
    </>
    )
}

export default PostCard;