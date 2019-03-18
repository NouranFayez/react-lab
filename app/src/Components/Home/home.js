import React from 'react';
import TodoForm from '../../Components/Todo/Form'
import TodoList from '../../Components/Todo/List'
import  CompletedList  from '../../Components/Todo/CompletedTodo';
import DeletedList from '../../Components/Todo/DeletedTodo'


const Home = ()=>{
    return (
        
        <>
        <div className="container">
        
      <div className="home">
          <TodoForm/>
          <div className="seeparator">Todo List</div>
          <TodoList/>
          <div className="seeparator">Completed List</div>
          <CompletedList/>
          <div>Deleted List</div>
          <DeletedList/>

      </div>
        </div>
          


        
    </>
    )
}

export default Home;