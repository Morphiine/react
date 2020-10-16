import React from 'react';

function Input( { onChange, value } ) {
    return (
        <input onChange={(e) => onChange(e.target.value)} value={value} type="text" className="form-control" placeholder="Filtrer par nom de famille" />
    );
}

export default Input;
