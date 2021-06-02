import React from 'react';
import './_aboutMe.scss';
import Stack from '../../components/stack/Stack';
import Css from '../../assets/images/css.png';
import Git from '../../assets/images/git.png';
import Js from '../../assets/images/js.png';
import Sass from '../../assets/images/sass.png';
import Html from '../../assets/images/html.png';
import Aws from '../../assets/images/aws.png';
import Heroku from '../../assets/images/heroku.png';
import Reactlogo from '../../assets/images/react.png';
import Yarn from '../../assets/images/yarn.png';

function AboutMe(props) {
    return (
        <div className='aboutme__container'>
            <div className="aboutme__text">
                <h4 className='aboutme__title'>Choosing the rigth candidate could be overwhelmed , right?</h4>
                <h3 className='aboutme__title2'>Let me tell you something about me and the challenges that i have overcome</h3>
                <p>I have developed self-taught learning skills and have a huge fascination with continuing to learn as i go along. </p>
                <p>I have been involve into tech world since December 2019 and started to create code professionaly from September 2020 till now.</p>
                <p>I'm following the mern stack and I'm going to become a fullstack developer</p>
                <h3 className='aboutme__title'>The reason why...</h3>
                <p>We could work together and I promise that I will give 100% of my talent to create products that gives value to the company's customers. This will be reflected in new business opportunities and perspectives for product development.</p>
                <h3 className='aboutme__title'>So, ¿How can i help you?</h3>
            </div>
            <div className="aboutme__stack">
                <h3 className='aboutme__title--stack'>Current stack</h3>
                <div className="aboutme__img--container">
                    <div className="stack__container">
                        <Stack
                            img={Html}
                            text='HTML5'
                        />
                        <Stack
                            img={Css}
                            text='CSS3'
                        />
                        <Stack
                            img={Js}
                            text='JavaScript'
                        />
                        <Stack
                            img={Sass}
                            text='SASS'
                        />
                        <Stack
                            img={Reactlogo}
                            text='ReactJs'
                        />
                        <Stack
                            img={Git}
                            text='Git'
                        />
                        <Stack
                            img={Yarn}
                            text='Yarn'
                        />
                        <Stack
                            img={Heroku}
                            text='Heroku'
                        />
                        <Stack
                            img={Aws}
                            text='AWS'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;

