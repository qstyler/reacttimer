import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Row, Column } from 'react-foundation';

import Nav from './components/Nav';
import Timer from './components/Timer';
import Countdown from './components/Countdown';

import 'foundation-sites/dist/css/foundation.min.css';
import 'foundation-sites/dist/css/foundation-float.min.css';
import './styles/app.scss';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Nav />
                    <Row>
                        <Column medium={8} centerOnSmall>
                            <Switch>
                                <Route exact path='/' component={Timer} />
                                <Route path='/countdown' component={Countdown} />
                            </Switch>
                        </Column>
                    </Row>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
