import React from 'react';
import './_skillBadge.scss';

function SkillBadge(props) {
    return (
        <div className="skills">
                <img src={props.img} alt=""/>
                <h4 className='skills__title2'>{props.title}</h4>
                <p>{props.p}</p>
        </div>
    );
}

export default SkillBadge;