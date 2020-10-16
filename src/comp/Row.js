import React from 'react';
import { Link } from "react-router-dom";

function Row({ user }) {
    return (
        <tr>
            <th ><span hidden>{user.id}</span>-</th>
            <th><img src={user.picture} alt={user.firstName}/></th>
            <th>{user.lastName}</th>
            <th>{user.firstName}</th>
            <th>{user.phone}</th>
            <th>{user.email}</th>
            <th>{user.email}</th>
            <th><Link/></th>
        </tr>
    );
}

export default Row;