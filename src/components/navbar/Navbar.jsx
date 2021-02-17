import React, { Component } from 'react';
import './_navbar.scss';


class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar__container">
                    <ul className='navbar__list'>
                        <li className="list"> Who am i? </li>
                        <li className="list"> Projects</li>
                        <li className="list"> Blog </li>
                        <li className="list"> Contact me </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;