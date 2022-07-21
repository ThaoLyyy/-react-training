import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todo: PropTypes.array,
    onTodoClick: PropTypes.func,
    
};
/**Neu cha ko truyen xuong thi  nhan mang rong */
TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,/**Todo ko truyen xuong thi nhan gia tri: null */
}

function TodoList(props) {
    const {todos, onTodoClick} = props;

    function handleClick(todo) {
        if(onTodoClick){
            onTodoClick(todo);
        }
    }
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id} onClick={() => handleClick(todo)}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;