import React from 'react';
import Row from './Row';

function Table( { users, usersSearch }) {
    return (
        <table id="tbl-users" className="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Photo</th>
                    <th>Prénom</th>
                    <th>Nom</th>
                    <th>Téléphone</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                { users.map((user, index) => <Row user={ user }  key={index} />)}
            </tbody>
        </table>
    );
}

export default Table;