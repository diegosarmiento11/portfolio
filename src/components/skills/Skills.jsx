import React from 'react';
import SkillBadge from '../skillBadge/SkillBadge';
import Pencil from '../../assets/images/pencil.png';
import Computer from '../../assets/images/computer.png';
import Code from '../../assets/images/code.png';
import Team from '../../assets/images/team.png';
import Communication from '../../assets/images/communication.png';
import Diego from '../../assets/images/diego.png';
import './_skills.scss';


function Skills(props) {
    return (
        <div className=''>
            <h3 className='skills_title'>{props.title}</h3>
            <div className='skills__container'> 
                <SkillBadge
                    img={Pencil}
                    title='Visual Design'
                    p='He desarrollado capacidades autodidactas de aprendizaje y tengo una enorme fascinación por seguir aprendiendo mientras construyo.' 
                />
                <SkillBadge
                    img={Computer}
                    title='Visual Design'
                    p='He desarrollado capacidades autodidactas de aprendizaje y tengo una enorme fascinación por seguir aprendiendo mientras construyo. '
                />
                <SkillBadge
                    img={Code}
                    title='Visual Design'
                    p='He desarrollado capacidades autodidactas de aprendizaje y tengo una enorme fascinación por seguir aprendiendo mientras construyo. '
                />
            </div>
            <h3 className='skills_title'>{props.title2}</h3>
            <div className='skills__container'>
                <SkillBadge
                    img={Communication}
                    title='Visual Design'
                    p='He desarrollado capacidades autodidactas de aprendizaje y tengo una enorme fascinación por seguir aprendiendo mientras construyo.'
                />
                <SkillBadge
                    img={Team}
                    title='Visual Design'
                    p='He desarrollado capacidades autodidactas de aprendizaje y tengo una enorme fascinación por seguir aprendiendo mientras construyo.'
                />
                <SkillBadge
                    img={Diego}
                    title='Visual Design'
                    p='He desarrollado capacidades autodidactas de aprendizaje y tengo una enorme fascinación por seguir aprendiendo mientras construyo.'
                />
            </div>
        </div>
        
    );
}

export default Skills;
