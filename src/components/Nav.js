import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Menu, MenuItem, Alignments,
    TopBar, TopBarTitle, TopBarLeft, TopBarRight,
} from 'react-foundation';

class Nav extends Component {
    render() {
        return (
            <TopBar>
                <TopBarLeft>
                    <Menu alignment={Alignments.LEFT}>
                        <MenuItem>
                            <NavLink exact to='/' className='menu-text'>React timer</NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to='/timer'>Timer</NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to='/countdown'>Countdown</NavLink>
                        </MenuItem>
                    </Menu>
                </TopBarLeft>
                <TopBarRight>
                    <TopBarTitle>Credentials</TopBarTitle>
                </TopBarRight>
            </TopBar>
        );
    }
}

export default Nav;