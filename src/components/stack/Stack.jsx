import React from 'react';
import './_stack.scss';

function Stack(props) {
    return (
        <div>
            <div>
                <div className="one">
                    <img src={props.img} alt=''/> 
                </div>
            </div>
        </div>
    );
}

export default Stack;