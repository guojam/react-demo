import React from 'react';
import Header from './header';

const Pager = props => (
    <div className="layout-pager">
        <Header title={props.title} />
        <div className="layout-container">{props.children}</div>
    </div>
);

export default Pager;
