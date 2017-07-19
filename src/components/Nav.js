import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Menu, MenuItem, Alignments, MenuText,
    TopBar, TopBarTitle, TopBarLeft, TopBarRight,
} from 'react-foundation';

class Nav extends Component {
    render() {
        return (
            <TopBar>
                <TopBarLeft>
                    <Menu alignment={Alignments.LEFT}>
                        <MenuText>React timer</MenuText>
                        <MenuItem>
                            <NavLink exact to='/'>Timer</NavLink>
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