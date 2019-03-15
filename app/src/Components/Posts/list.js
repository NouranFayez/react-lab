import React from 'react';
// import PostCard from './post';
import axios from 'axios';
import PostCard from './post';
import { Link } from 'react-router-dom';

export default class PostsList extends React.Component {
    state = {
        data: [],
    }
    componentDidMount() {
        // Call api
        // set data in state
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
        return (
            <>
                <div className="posts-box">

                    <h3><Link to="/add">Add Post</Link></h3>
                </div>

                {this.state.data.map(p => <PostCard key={p.id} title={p.title} id={p.id} />)}
            </>
        )
    }
}