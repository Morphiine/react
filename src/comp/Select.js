import React from 'react';

function Select({ value }) {
    return (
        <div className="col-2">
            <select onClick={ console.log('test') } className="form-control">
                <option value="firstName">Nom</option>
                <option value="lastName">Prénom</option>
                <option value="mail">Email</option>
            </select>
        </div>
    );
}

export default Select;