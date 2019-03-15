import React from 'react';
import MovieCard from './MovieCard';
import data from '../../data';


export default class MovieList extends React.Component{
    constructor (props){
        super(props);
        this.state={
          data: this.props.data,
          checked:true,
    
        }
    }
     
    
    handleChange=(e)=>{
       const target = e.target.value;
       console.log(target);
       
       this.setState({data:this.props.data.filter(element => element.Title.toLowerCase().includes(target.toLowerCase()))});
       console.log(this.state.data);
   }
   handleChecked=(e)=>{
       const check =e.target.checked;
       let checkItem = this.props.data.filter(element=> element.Watched==check);
       this.setState({checked:checkItem , data:checkItem})
       console.log(this.state.checked);
}
render(){
    
    return (
        <>
        <div className="search">
        <input type="text" className="search-input" id="input" name="search" onChange={this.handleChange} />
        <span>
         <input type="checkbox"  onChange={this.handleChecked}/>
             watched movies
        </span>
        </div>
        {this.state.data.map(m=> <MovieCard key={m.imdbID} {...m}/>)}
        </>);
    }
}
