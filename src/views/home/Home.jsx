import Main from '../../components/main/Main';
import Navbar from '../../components/navbar/Navbar';
import Projects from '../../components/projects/Projects';
import Project1 from '../../assets/images/Project1.png';
import Personal from '../../assets/images/personal.png';
import ProaHome from '../../assets/images/proa-home.png';
import PlatziVideo from '../../assets/images/PlatziVideo.png'
import Title from '../../components/title/Title';
import Skills from '../../components/skills/Skills';
import React from 'react';
import AboutMe from '../../components/aboutMe/AboutMe';
import SkillBadge from '../../components/skillBadge/SkillBadge';
import Footer from '../../components/footer/Footer';

import './_home.scss';
import HelpYou from '../../components/helpYou/HelpYou';


function Home(props) {
    return (
        <div className="home__container">
                <Navbar
                    link='HOMETARGET'
                />
                <Main/>
                <Title
                    name='Lastest projects'
                    link='PROJECTTARGET2'
                />
                <Projects 
                    heading="1. Landingpage for enproa.co"
                    subtitle="Single Page Aplication for an electronic signature company"
                    p1="This is a fully responsive website designed from scratch using Figma and builded with React Js"
                    p2="I implemented Technical SEO configuration for this project and it is on top when you search it"
                    Project1={ProaHome}
                    first='HTML'
                    second='CSS'
                    third='React'
                    fourth='Aws'
                />
                <Projects 
                    heading="2. Login / Register flow for enproa.co"
                    subtitle="Designed and translated to code using React Js and React router"
                    p1="Every view is connected using React Router and its a full validated form, it shows you 404, 500 and 200 responses when user click on events."
                    p2="I used BEM and SASS for good practices."
                    Project1={Project1}
                    first='HTML'
                    second='CSS'
                    third='React'
                    fourth='Aws'
                />
                <Projects
                    heading="3. Personal website diegosarmiento.co"
                    subtitle="Website design and WebApp"
                    p1="This is my custom website and was designed, coded and deployed by me using React, Router, some icons and images libraries and was deployed using AWS with an excellent CI."
                    p2="Full responsive website"
                    Project1={Personal}
                    first='HTML'
                    second='JS'
                    third='Hooks'
                    fourth='Amplify'
                />
                <Projects
                    heading="4. Platzi video local hosted"
                    subtitle="API calls to get images"
                    p1="This was a project where Platzi teachers teach me how to make API calls using GET, POST and Fecth"
                    p2="Was my first React Js project"
                    Project1={PlatziVideo}
                    first='HTML'
                    second='JS'
                    third='React'
                    fourth='Aws'
                />
                <Title
                    name='About me'
                    link='WHOAMITARGET'
                />
                <AboutMe/>
                <Title
                    name='My Skills'
                    link='SKILLSTARGET'
                    />
                    
                <Skills
                    title='Hard skills'
                    title2='Core skills'>
                <SkillBadge/>
                </Skills>
                <HelpYou/>
                <Footer/>
            </div>
    );
}

export default Home;