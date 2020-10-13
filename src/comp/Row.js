import React from 'react';

function Row({ user }) {
    console.log(user);
    return (
        <tr>
            <th>{user.name.last}</th>
            <th>{user.name.first}</th>
            <th>{user.email}</th>
            <th>{user.phone}</th>
        </tr>
              
    );
}

export default Row;