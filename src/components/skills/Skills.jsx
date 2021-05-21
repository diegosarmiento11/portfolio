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
        <div>
            <h3 className='skills_title'>{props.title}</h3>
            <div className='skills__container'> 
                <SkillBadge
                    img={Pencil}
                    title='Visual Design'
                    p='Confident about Figma and Adobe XD for mockups and prototypes' 
                />
                <SkillBadge
                    img={Computer}
                    title='Marketing'
                    p='Great skills with Google Analytics, Google Ads and Google Tag Manager'
                />
                <SkillBadge
                    img={Code}
                    title='Coding'
                    p='Im mastering React js and improving my JavaScript code, always iterating and learning about my bugs'
                />
            </div>
            <h3 className='skills_title'>{props.title2}</h3>
            <div className='skills__container'>
                <SkillBadge
                    img={Communication}
                    title='Great communication skills'
                    p='Because of my studies background i have developed excellent conflict resolution and active listening skill, to me, empathy is a very important value'
                />
                <SkillBadge
                    img={Team}
                    title='Collaborative'
                    p='i prioritize group goals over personal recognition or agendas having an open mind about suggestions from team members'
                />
                <SkillBadge
                    img={Diego}
                    title='Proactivity'
                    p='I considered myself as very curious, developing self taught abilities and passionate about build bridges instead of walls.'
                />
            </div>
        </div>
        
    );
}

export default Skills;
