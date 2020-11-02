import React from 'react';
import { Link } from "react-router-dom";

function Row({ user }) {
    return (
        <tr>
            <th><img className="rounded-circle mx-auto d-block" src={user.thumbnail} alt={user.firstName}/></th>
            <th>{user.lastName}</th>
            <th>{user.firstName}</th>
            <th>{user.phone}</th>
            <th>{user.email}</th>
            <th><Link to={`/user/${user.id}`}><button type="button" className="btn btn-outline-primary">Éditer</button></Link></th>
        </tr>
    );
}

export default Row;