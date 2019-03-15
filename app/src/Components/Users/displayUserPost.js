import React from 'react';
import axios from 'axios';
import UserPost from './userPost'
import { get } from 'http';

export default class DisplayUserPost extends React.Component{
    state={
        data:[],
        userpost:[]
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => {
            // handle success
            const data = response.data;
            this.setState({userpost: data });
        })
        .catch((error) => {
            // handle error
            console.log(error);
        });
    }
    render(){
        return this.state.userpost.map(p => <UserPost key={p.id} userId={p.userId} body={p.body} title={p.title} />)
    }
}