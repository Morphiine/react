import React from 'react';

function Button( { onClick } ) {
    return (
        <div className="col-sm-2 col-12">
            <label for="fetchUsers">Action</label>
            <div><button onClick={onClick} id="fetchUsers" className="btn btn-secondary align-text-bottom">Afficher</button></div>
        </div>
    );
}

export default Button;
