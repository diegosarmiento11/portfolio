import React from 'react';
import './_main.scss';
import Profile from '../../assets/images/profileimage.png';
import styled from 'styled-components';


const theme = {
    white : {
        default: 'white',
        border: 'none',
    },
    blue : {
        default: 'transparent',
        border: '1px solid #4075FF',
        hover: 'transform: translateY(-0.25em);'
    }

}

const Button = styled.button`
    background-color: ${props => theme[props.theme].default};
    color: #4075FF;
    padding: 25px 70px;
    font-size: 26px;
    margin: 0px 10px;
    font-weight: bold;
    outline: 0;
    border-radius: 20px;
    border: ${props => theme[props.theme].border};
    cursor: pointer;
    &:hover {
        background-color: ${props => theme[props.theme].hover};
        transform: translateY(-0.25em);
        transition: 0.4s;
    }

`
Button.defaultProps = {
    theme: 'white'
}


function Main(props) {
    return (
        <div>
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
                        <Button>
                            Get in touch
                         </Button>
                         <Button theme='blue'>
                            CV / Resumee
                         </Button>
                    </div>
                </div>
                <h2 className='main__heading2'> Lets build things together!</h2>
            </div>
        </div>
    );
}

export default Main;

