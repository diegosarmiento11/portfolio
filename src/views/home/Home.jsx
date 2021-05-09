import Main from '../../components/main/Main';
import Navbar from '../../components/navbar/Navbar';
import Projects from '../../components/projects/Projects';
import Project1 from '../../assets/images/Project1.png';
import Project2 from '../../assets/images/Project2.png';
import Title from '../../components/title/Title';
import Skills from '../../components/skills/Skills';
import React from 'react';
import AboutMe from '../../components/aboutMe/AboutMe';
import SkillBadge from '../../components/skillBadge/SkillBadge';

import './_home.scss';
import HelpYou from '../../components/helpYou/HelpYou';


function Home(props) {
    return (
        <div className="home__container">
                <Navbar/>
                <Main/>
                <Title
                    name='Lastest projects'/>
                <Projects 
                    heading="1. proa for enproa.co"
                    subtitle="Single Page Aplication for an electronic signature company"
                    p1="Connecting every view with React Router and binding components with the last and good practices of React Redux."
                    p2="holi"
                    Project1={Project1}
                    first='HTML'
                    second='CSS'
                    third='React'
                    fourth='Aws'
                />
                <Projects
                    heading="2. proa for enproa.co"
                    subtitle="Website design and WebApp"
                    p1="This was a fully custom webApp that i designed from scratch in Figma. It was builded using React.js."
                    p2="holi"
                    Project1={Project2}
                    first='HTML'
                    second='JS'
                    third='React'
                    fourth='Aws'
                />
                <Projects 
                    heading="3. proa for enproa.co"
                    subtitle="Single Page Aplication for an electronic signature company"
                    p1="Connecting every view with React Router and binding components with the last and good practices of React Redux."
                    p2="Holi"
                    Project1={Project1}
                    first='HTML'
                    second='CSS'
                    third='React'
                    fourth='Aws'
                />
                <Projects
                    heading="4. proa for enproa.co"
                    subtitle="Website design and WebApp"
                    p1="This was a fully custom webApp that i designed from scratch in Figma. It was builded using React.js."
                    p2="Holi"
                    Project1={Project2}
                    first='HTML'
                    second='JS'
                    third='React'
                    fourth='Aws'
                />
                <Title
                    name='About me'/>
                <AboutMe/>
                <Title
                    name='My Skills'/>
                <Skills
                    title='Hard skills'
                    title2='Core skills'>
                    <SkillBadge/>
                </Skills>
                <HelpYou/>
            </div>
    );
}

export default Home;