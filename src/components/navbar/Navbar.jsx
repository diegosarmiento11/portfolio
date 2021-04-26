import React, { Component } from 'react';
import './_navbar.scss';


class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar__container">
                    <ul className='navbar__list'>
                        <li className="list">
                             <a href="/"> Projects  </a>
                        </li>
                        <li className="list">
                             <a href="/"> Who am i? </a>
                        </li>
                        <li className="list">
                             <a href="/"> Contact me </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;
