import React from 'react';

function Nav() {
    return (
        <div className="row">
            <nav className="navbar navbar-dark bg-dark col-12 mb-3">
                <div className="container">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Accueil</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
