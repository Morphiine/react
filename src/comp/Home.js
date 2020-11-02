import React from 'react';
import Table from './Table';

function Home({ users }) {
    if(users.length === 0) {
        return(
            <div className="alert alert-warning" role="alert">
                Aucun élément trouvé.
            </div>
        );
    }
    return (
        <Table users={users}/>
    );
}

export default Home;