import React from 'react';

function Input( { onChange, value } ) {
    return (
        <div className="col-sm-8 col-8 form-group">
            <label for="inputSearch">Zone de recherche</label>
            <input id="inputSearch" onChange={(e) => onChange(e.target.value)} value={value} type="text" className="form-control" placeholder="Saisir les premiers caractères de votre recherche..." />
        </div>
    );
}

export default Input;
