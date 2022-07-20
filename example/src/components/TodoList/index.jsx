import React from 'react';
import PropTypes from 'prop-types';

TodoListDemo.propTypes = {
    todo: PropTypes.array,
    onTodoClick: PropTypes.func,
    
};
/**Neu cha ko truyen xuong thi  nhan mang rong */
TodoListDemo.defaultProps = {
    todos: [],
    onTodoClick: null,/**Todo ko truyen xuong thi nhan gia tri: null */
}

function TodoListDemo(props) {
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

export default TodoListDemo;