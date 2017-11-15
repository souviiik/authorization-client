import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item"><a href="#">Sign in</a></li>
                    <li></li>
                </ul>
            </nav>
        );
    }
}

export default Header;