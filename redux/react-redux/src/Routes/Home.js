import React, { useState } from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';

const Home = ({toDos,addTodo}) => {
    console.log(toDos,addTodo);
    const [text,setText] = useState("");  

    const onChange = e => {
        setText(e.target.value);
    }
    const onSubmit = e => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>ADD</button>
            </form>
            <ul>
                {JSON.stringify(toDos)}
            </ul>
        </>
    );
}

function mapStateToProps(state){
    return {toDos:state}
}

function mapDispatchToProps(dispatch){
    return {
        addTodo:text => dispatch(actionCreators.addTodo(text)),

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)