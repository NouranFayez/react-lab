import React from 'react';
import axios from 'axios';
import CommentCard from './commentCard';

export default class PostComments extends React.Component{
    state={
        data:[],
        comment:[]
    }
    
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((response) => {
                // handle success
                const data = response.data;
                this.setState({comment: data });
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }
    render(){
        return this.state.comment.map(p => <CommentCard key={p.id} id={p.postId} body={p.body} />)
    }
    // render() {
    //     const { data } = this.state;
    //     debugger
    //     return (
            
    //         <div className="post-box">
    //             <div className="post">
    //                 <h3><span>Post ID :</span> {data.id}</h3>
    //                 <h3><span>Post Body :</span> {data.body}</h3>
    //                 {/* <h3>{data.userId}</h3> */}
    //             </div>
    //         </div>
    //     )
    // }


}