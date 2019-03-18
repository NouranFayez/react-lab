import React from 'react';
import { connect } from 'react-redux';
import TodoCard from '../Todo/card'

const DeletedList = props =>{
  return (

  <>

    {

      props.data.filter(t => (!t.completed && t.deleted)).map(t => <TodoCard key={t.id} {...t} />
      )
    }

  </>
)
  };

const mapStateToProps = state => ({
  data: state.data,
});

export default connect(mapStateToProps)(DeletedList);
