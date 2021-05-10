import React from 'react';
import './_title.scss';

function Title(props) {
    return (
        <div>
            <h2 id={props.link} className="title__project">{props.name}</h2>
        </div>
    );
}

export default Title;
