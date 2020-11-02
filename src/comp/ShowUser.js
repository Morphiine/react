import React from 'react';
import { useParams } from "react-router-dom";

function ShowUser({ users }) {

    const { userid } = useParams();
    
    if(users.length === 0) {
        return(
            <div className="alert alert-warning" role="alert">
                Aucun élément trouvé.
            </div>
        );
    }

    const user = users.find((user) => user.id === userid);
    
    return (
        <div className="row">
            <div className="col-sm-2 col-12">
                <img className="rounded mx-auto d-block" src={ user.large } alt={ user.firstName }/>
            </div>
            <div className="col-sm-8 col-12 card bg-light">
                <div className="card-body">
                <h5 className="card-title mb-3">{ user.lastName } { user.firstName } (#ID { user.id })</h5>
                    <div><b>Téléphone</b> { user.phone }</div>
                    <div><b>E-mail</b> { user.email }</div>
                </div>
            </div>
        </div>
    );
}

export default ShowUser;