import React from 'react';
import './_skillBadge.scss';

function SkillBadge(props) {
    return (
        <div className="skills">
                <img src={props.img} alt=""/>
                <h4>{props.coretitle}</h4>
                <p>{props.corep}</p>
        </div>
    );
}

export default SkillBadge;