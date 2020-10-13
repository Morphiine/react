import React from 'react';
import Button from './Button';

function Header( { onFetchClick } ) {
    return (
        <div>
            <h1>TD React / Axios</h1>
            <hr/>
            <Button onClick={onFetchClick}></Button>
            <hr/>        </div>
    );
}

export default Header;