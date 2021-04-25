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

function AboutMe(props) {
    return (
        <div className='aboutme__container'>
            <div className="aboutme__text">
                <h4 className='aboutme__title2'>Choosing the rigth candidate could be overwhelmed , right?</h4>
                <h3 className='aboutme__title'>Let me tell you something about me and the challenges that i have overcome</h3>
                <p>He desarrollado capacidades autodidactas de aprendizaje y tengo una enorme fascinación por seguir aprendiendo mientras construyo. </p>
                <h3 className='aboutme__title'>So, ¿How can i help you?</h3>
                <p>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                <h3 className='aboutme__title'>The reason why...</h3>
                <p>He desarrollado capacidades autodidactas de aprendizaje y tengo una enorme fascinación por seguir aprendiendo mientras construyo. </p>
            </div>
            <div className="aboutme__stack">
                <h3 className='aboutme__title--stack'>Actual stack</h3>
                <div className="aboutme__img--container">
                    <div className="stack__container">
                        <Stack
                            img={Css}
                        />
                        <Stack
                            img={Git}
                        />
                        <Stack
                            img={Js}
                        />
                        <Stack
                            img={Sass}
                        />
                        <Stack
                            img={Html}
                        />
                        <Stack
                            img={Aws}
                        />
                        <Stack
                            img={Heroku}
                        />
                        <Stack
                            img={Reactlogo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
