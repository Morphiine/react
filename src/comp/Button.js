import React from 'react';

function Button( { onClick } ) {
    return(
        <div>
        <button onClick={onClick} id="fetch-users" className="btn btn-secondary ml-2">Show</button>
        </div>
    );
}

export default Button;
