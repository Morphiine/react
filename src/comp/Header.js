import React from 'react';
import Button from './Button';
import Input from './Input';
import Select from './Select';

function Header( { onSearch, search, onFetchClick, onChangeSearch } ) {
    return (
        <div>
            <h1>TD React / Axios</h1>
            <div className="row mb-3">
                <Input onChange={onSearch} value={search}/>
                <Select onChange={onChangeSearch}/>
                <Button onClick={onFetchClick}/>
            </div>
        </div>
    );
}

export default Header;