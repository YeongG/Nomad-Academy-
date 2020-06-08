import React from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

const TodoItemDetails = ({toDo,btnClick}) => {
    return (
        <>
            <h1>{toDo && toDo.text}</h1>
            <button onClick={btnClick}>DEL</button>
        </>
    );
}

function mapStateToProps(state,ownProps) {
    const {match:{params:{id}}} = ownProps;
    return {toDo:state.find(toDo => toDo.id === parseInt(id))}
}

function mapDispatchToProps(dispatch,ownProps) {
    const {match:{params:{id}}} = ownProps;
    return {btnClick:() => {
        dispatch(actionCreators.deleteTodo(parseInt(id)));
        ownProps.history.push("/");
    }}
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoItemDetails);