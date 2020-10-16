import React from 'react';

function Button( { onClick } ) {
    return (
        <div>
            <button onClick={onClick} id="fetch-users" className="btn btn-secondary ml-2">Afficher</button>
            <button onClick={onClick} id="sort-users" className="btn btn-secondary ml-2">Trier</button>
        </div>
    );
}

export default Button;
