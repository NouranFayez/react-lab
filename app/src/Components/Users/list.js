import React from 'react';
import Axios from 'axios';
import User  from './user'

export default class UsersList extends React.Component{
    state={
        data:[],
    }
    componentDidMount=()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            // handle success
            const data = response.data;
            this.setState({ data });
          })
          .catch((error) => {
            // handle error
            console.log(error);
          });
    }

    render(){
        return this.state.data.map(p => <User key={p.id} name={p.name} username={p.username} email={p.email} id={p.id}/>)
    }
}