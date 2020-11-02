import React from 'react';

function Input( { onChange, value } ) {
    return (
        <label className="col-8">
            <input onChange={(e) => onChange(e.target.value)} value={value} type="text" className="form-control" placeholder="Rechercher" />
        </label>
    );
}

export default Input;
