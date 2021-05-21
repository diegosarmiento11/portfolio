import React from 'react';
import './_main.scss';
import Button from '../../components/button/Button';
import Profile from '../../assets/images/profileimage.png';

function Main(props) {
    return (
            <div className='main' id={props.link}>
                <div className='main__container'>
                    <div className='image__container'>
                        <img className='profile__image' src={Profile} alt="Diego Sarmiento profile"/>
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
                                url='https://api.whatsapp.com/send?phone=573142968917'
                            />
                            <Button 
                                name='CV / Resumé'
                                url='https://diegosarmientocv.s3.amazonaws.com/Diego+Sarmiento+(2).pdf'
                            />
                        </div>
                    </div>
                </div>
                <h2 id='PROJECTTARGET' className='main__heading2'> Lets build things together!</h2>
            </div>
    );
}

export default Main;

