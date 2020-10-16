import React from 'react';

function Nav( { onChange, value } ) {
    return (
        <div class="row">
            <nav class="navbar navbar-dark bg-dark col-12 mb-4">
            <div className="container">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                    <a class="nav-link" href="#">Accueil</a>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    );
}

export default Nav;
