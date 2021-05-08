import React from 'react';
import './_button.scss';

function Button(props) {
    return (
        <div className='button__container'>
            <button className='final__button' type='text'>
                {props.name}
            </button>
        </div>
    );
}

export default Button;
