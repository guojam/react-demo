import React from 'react';
import { NavLink } from 'react-router-dom';
import Pager from '../../components/layout/pager';

class Home extends React.Component {
    render() {
        return (
            <Pager title="首页">
                <ul className="home-nav">
                    <li>
                        <NavLink exact to="/testctrl">
                            受控/非受控组件
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/confirm">
                            Confirm组件测试
                        </NavLink>
                    </li>
                </ul>
            </Pager>
        );
    }
}

export default Home;
