import React from 'react';
import {connect} from 'react-redux'
import {completedTodo} from '../../actions/todo'
import {deleteTodo} from '../../actions/todo'

 class TodoCard extends React.Component{
constructor(props){
    super(props);
    
}
handleCompleted=(e)=>{
    const id = this.props.id;
    this.props.completedTodo(id)
}
handleDeleted=(e)=>{
   const id = this.props.id;
   this.props.deleteTodo(id);
}
render(){
    const {completed,deleted,id,text}=this.props;
        return(
            <>
              <div>
              <span>{text} </span>
              <button onClick={this.handleCompleted }>completed</button>
              <button onClick={this.handleDeleted}>deleted</button>

              </div>
            </>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    completedTodo: id => dispatch(completedTodo(id)),
    deleteTodo:id => dispatch(deleteTodo(id))
  });

export default connect(null, mapDispatchToProps)(TodoCard);
