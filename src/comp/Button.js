import React from 'react';

function Button( { onClick } ) {
    return (
        <button onClick={onClick} id="fetch-users" className="btn btn-secondary ml-2">Afficher</button>
    );
}

export default Button;
