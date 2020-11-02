import React from 'react';

function Select({ value }) {
    return (
        <div className="col-sm-2 col-12 form-group">
            <label for="inputFilter hidden-md-up">Filtrer par</label>
            <select id="inputFilter" onChange={ console.log('brbrbr') } className="form-control">
                <option value="firstName">Nom</option>
                <option value="lastName">Prénom</option>
                <option value="mail">Email</option>
            </select>
        </div>
    );
}

export default Select;