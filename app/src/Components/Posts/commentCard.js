import React from 'react';
import { Link } from "react-router-dom";



const CommentCard = (props)=>{
    return (
        <>
     <div className="post-box">
                <div className="post">
                     <h3><span>Post ID :</span> {props.id}</h3>
                     <h3><span>Post Body :</span> {props.body}</h3>
                     {/* <h3>{data.userId}</h3> */}
                 </div>
             </div>
    </>
    )
}

export default CommentCard;