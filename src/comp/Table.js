import React from 'react';

import Row from './Row';

function Table( { users }) {

    return (
        <table id="tbl-users" className="table table-hover">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Tel</th>
                </tr>
            </thead>
            <tbody>
                { users.map((user) => <Row user={ user } />)}
            </tbody>
        </table>
    );
}




export default Table;