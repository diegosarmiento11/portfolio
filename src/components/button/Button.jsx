import React from 'react';
import './_button.scss';

function Button(props) {
    return (
        <div className='button__container'>
            <button className='final__button' type='text'>
                Get in touch
            </button>
        </div>
    );
}

export default Button;
