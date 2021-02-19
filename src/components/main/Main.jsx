import React, { Component } from 'react';
import './_main.scss';
import Profile from '../../assets/images/profileimage.png';

class Main extends Component {
    render() {
        return (
            <div className='main__container'>
                <h1 className='main__heading'>
                    diego
                </h1>
                <h1 className="main__heading">
                    sarmiento
                </h1>
                <h3 className='main__subheading'>Front-end developer</h3>
                <div className='image__container'>
                    <img className='profile__image' src={Profile} alt=""/>
                </div>
                <h2 className='main__heading2'> Lets build things toghether</h2>
            </div>
            
            
        );
    }
}

export default Main;
