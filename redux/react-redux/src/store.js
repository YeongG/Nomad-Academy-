import {createStore} from 'redux';

const ADD = "ADD";
const DELETE = "DELETE";

const addTodo = text => {
    return {
        type:ADD,
        text
    }
}

 const deleteTodo = id => {
    return {
        type:DELETE,
        id
    }
}


const todoModifier = (todos = [], action) => {
    switch(action.type) {
        case ADD : return [...todos,{text:action.text,id:Date.now()}];
        case DELETE : return todos.filter(todo => todo.id !== action.id);
        default : return todos;
    }
}
const todoStore = createStore(todoModifier);
 


export default todoStore;
export const actionCreators = {
    addTodo,
    deleteTodo
}