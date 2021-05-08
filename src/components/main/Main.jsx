import React from 'react';
import './_main.scss';
import Button from '../../components/button/Button';
import Profile from '../../assets/images/profileimage.png';

function Main() {
    return (
            <div className='main' >
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
                        <div className="button__container2">
                            <Button
                                name='Get in touch'
                            />
                            <Button 
                                name='CV / Resumé'>
                            </Button>
                        </div>
                    </div>
                </div>
                <h2 className='main__heading2'> Lets build things together!</h2>
            </div>
    );
}

export default Main;

