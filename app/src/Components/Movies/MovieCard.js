import React from 'react';

const MovieCard = (props) =>{
    
    return <div className="card-container" key={props.imdbID}>
                <img className="img" alt="poster" src={props.Poster==='N/A' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWNc7RDGO2W9u5TfL7TPRAtfMrhjwwGX1q_Lf24ZOTIJGe2HH':props.Poster}/>  
                 <div className="card-details">
                 <ul>
                    <li>
                        <label>Title: </label>
                       <span> {props.Title}</span>
                  </li>
                   <li>
                  <label>Year: </label>
                      <span> {props.Year}</span>
                  </li>
                 <li>
                 <label>Type: </label>
                   <span> {props.Type}</span>
                 </li>
    
         </ul>
             </div>
         </div>
}

export default MovieCard;