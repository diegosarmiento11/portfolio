import React, { Component } from 'react';
import './_main.scss';
import Profile from '../../assets/images/profileimage.png';

class Main extends Component {
    render() {
        return (
            <div >
                <div className='main__container'>
                    <div className='image__container'>
                        <img className='profile__image' src={Profile} alt=""/>
                    </div>
                    <div className="text__container">
                        <h2 className='main__heading'>
                            Hello! I'm Diego Alejandro Sarmiento
                        </h2>
                        <h1 className="main__title">
                            Front-end Developer
                        </h1>
                        <h3 className='main__subheading'>I design and develop responsive, optimized and efficient websites.</h3>
                    </div>
                </div>
                <h2 className='main__heading2'> Lets build things together</h2>
            </div>
            
            
        );
    }
}

export default Main;
