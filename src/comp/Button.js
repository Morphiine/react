import React from 'react';

function Button( { onClick } ) {
    return (
        <div className="col-2">
            <button onClick={onClick} id="fetch-users" className="btn btn-secondary">Afficher</button>
        </div>
    );
}

export default Button;
