import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Header = props => {
    const { title, location } = props;
    return (
        <header className="layout-header">
            <h1>{title}</h1>
            {location.pathname === '/' ? null : (
                <NavLink className="back" exact to="/">
                    &lt;
                </NavLink>
            )}
        </header>
    );
};

export default withRouter(Header);
