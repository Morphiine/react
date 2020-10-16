import React from 'react';
import Button from './Button';
import Input from './Input';

function Header( { onFetchClick, onSearch, search } ) {
    return (
        <div>
            <h1>TD React / Axios</h1>
            <hr/>
            <Input onChange={onSearch} value={search}></Input>
            <hr/>
            <Button onClick={onFetchClick}></Button>
            <hr/>
        </div>
    );
}

export default Header;