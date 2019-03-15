import React from 'react';


const UserPost=(props)=>{
    return(
        <>
<div className="post-box">
                <div className="post">
                     <h3><span>UserID :</span> {props.userid}</h3>
                     <h3><span>Post Title :</span> {props.title}</h3>
                     <h3><span>Post Body :</span> {props.body}</h3>
                     {/* <h3>{data.userId}</h3> */}
                 </div>
             </div>

        </>
    )
}
export default UserPost