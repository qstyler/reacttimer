import React, {Component} from 'react';
import 'src/App.scss';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';


import 'foundation-sites/dist/css/foundation.min.css';
import 'foundation-sites/dist/css/foundation-float.min.css';

import './styles/app.scss';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
        );
    }
}

export default App;
