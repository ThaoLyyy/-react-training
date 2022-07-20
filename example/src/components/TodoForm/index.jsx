import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit:PropTypes.func,
    
};
// gia tri mac dinh:null
TodoForm.defaultProps = {
    onSubmit: null,
}


function TodoForm(props) {
    const {onSubmit} = props;
    const [value, setValue] = useState('');

    function handleValueChang(e) {
        console.log(e.target.value);
        setValue(e.target.value)
    }

    /**chong  reload. */
    function handleSubmit(e){
        // Prevent reloading browser
        e.preventDefault();

        if(!onSubmit) return;

        const formValue = {
            title: value,
        };
        onSubmit(formValue);

        // Reset form
        setValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleValueChang}/>
        </form>
    );
}

export default TodoForm;