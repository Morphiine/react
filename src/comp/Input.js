import React from 'react';

function Input( { onChange, value } ) {

    return(
        <input onChange={onChange} value={value} type="text" className="form-control" placeholder="Search" />
    );
}

export default Input;
