import React from 'react';

function Row({ user }) {
    return (
        <tr>
            <th ><span hidden>{user.id}</span>-</th>
            <th><img src={user.picture} alt={user.firstName}/></th>
            <th>{user.firstName}</th>
            <th>{user.lastName}</th>
            <th>{user.phone}</th>
            <th>{user.email}</th>
        </tr>
    );
}

export default Row;