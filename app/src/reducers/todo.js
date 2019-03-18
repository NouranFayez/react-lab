export default (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log({ ...state, data: [...state.data, action.data] });
      return { ...state, data: [...state.data, action.data] };
    case 'DELETE_TODO':
    const deletedArray = state.data.slice();
    const deletedItem = deletedArray.find(item=> item.id=action.data);
    deletedItem.deleted=!deletedItem.deleted;
    console.log(deletedItem.deleted);
      return { ...state, data: deletedArray };
    case 'COMPLETED_TODO':
      const completedArray = state.data.slice();
      const completedItem = completedArray.find(item => item.id = action.data);
      completedItem.completed = !completedItem.completed;
       console.log( { ...state, data: [...state.data, completedArray] });
      
      return { ...state, data: completedArray };

    default:
      return state;
  }
};
