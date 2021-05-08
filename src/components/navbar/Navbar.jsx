import React, { Component } from 'react';
import './_navbar.scss';
import Hamburguer from '../hamburguer/Hamburguer';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import DiegoLogo from '../../assets/images/diegoSarmiento.png'


class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar__container">
                    <Router>
                        <Hamburguer/>
                        <Switch>
                            <Route path='/' />
                        </Switch>
                    </Router>
                    <div className="navbar__image--container">
                        <a href="index.html">
                            <img src={DiegoLogo} alt="Logo Diegosarmiento.co" />
                        </a>
                    </div>
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
