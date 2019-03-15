import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Header from '../header/header';

export default class DisplayUser extends React.Component {

    state = {
        data: {},
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(this.props)
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
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

    render() {
        const { data } = this.state;
        return (
            
            <div className="user-box">
                <div className="user">
                    <h3> <span> Name :</span> {data.name}</h3>
                    <h3><span> ID :</span> {data.id}</h3>
                    <h3><span> Username :</span> {data.username}</h3>
                    <h3><span> Email :</span> {data.email}</h3>
                    <h3><span> Phone :</span> {data.phone}</h3>
                    <h3><Link to ={`/userpost/${data.id}`}>Show posts of that user</Link></h3>
                    

                    {/* <h3>{data.userId}</h3> */}
                </div>
            </div>
        )
    }
}