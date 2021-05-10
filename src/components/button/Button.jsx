import React from 'react';
import './_button.scss';

function Button(props) {
    return (
        <div className='button__container'>
            <a href={props.url} className='final__button' type='text'>
                {props.name}
            </a>
        </div>
    );
}

export default Button;
