import React from 'react';

function Button( { onClick } ) {
    return(
        <button onClick={onClick} id="fetch-users" className="btn btn-secondary">Show</button>
    );
}

export default Button;
