import React from 'react';
import SkillBadge from '../skillBadge/SkillBadge';
import Pencil from '../../assets/images/pencil.png';
import Computer from '../../assets/images/computer.png';
import Code from '../../assets/images/code.png';
import './_skills.scss';


function Skills(props) {
    return (
        <div className='skills__container'>
            <h3 className='skills_title'>{props.title}</h3>
            <SkillBadge
                img={Pencil}
            />
            <SkillBadge
                img={Computer}
            />
            <SkillBadge
                img={Code}
            />
            <h3 className='skills_title'>{props.title2}</h3>
            <SkillBadge
                img={Pencil}
            />
            <SkillBadge
                img={Computer}
            />
            <SkillBadge
                img={Code}
            />
        </div>
    );
}

export default Skills;
