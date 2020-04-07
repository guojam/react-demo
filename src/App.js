import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import TestConfirm from './pages/test-confirm';
import TestCtrlUnctrl from './pages/test-ctrl-unctrl';

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path="/" exact component={Home}></Route>
                    <Route
                        path="/testctrl"
                        exact
                        component={TestCtrlUnctrl}
                    ></Route>
                    <Route
                        path="/confirm"
                        exact
                        component={TestConfirm}
                    ></Route>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
