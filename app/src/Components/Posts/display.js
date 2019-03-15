import React from 'react';
import SimpleSchema from 'simpl-schema';
import axios from 'axios';
import Header from '../header/header';
import {Link } from 'react-router-dom';
export default class DisplayPost extends React.Component {

    state = {
        data: {},
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
    // const id = this.state.data.map(p=>p.id) ;
    
    render() {
        const { data } = this.state;
        return (
            
            <div className="post-box">
                <div className="post">
                    <h3> <span> Post Title :</span> {data.title}</h3>
                    <h3><span>Post ID :</span> {data.id}</h3>
                    <h3><span>Post Body :</span> {data.body}</h3>
                    <h3><Link to ={`/comments/${data.id}`}>Show Comment</Link></h3>
                    {/* <h3>{data.userId}</h3> */}
                </div>
            </div>
        )
    }
}