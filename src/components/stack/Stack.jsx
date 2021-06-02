import React from 'react';
import './_stack.scss';

function Stack(props) {
    return (
        <div>
            <div>
                <div className="one">
                  <p className='one__text'>{props.text}</p>
                    <img className='stack__images' src={props.img} alt='Diego Sarmiento stack images'/> 
                </div>
            </div>
        </div>
    );
}

export default Stack;