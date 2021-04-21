import Main from '../../components/main/Main';
import Navbar from '../../components/navbar/Navbar';
import Projects from '../../components/projects/Projects';
import Project1 from '../../assets/images/Project1.png';
import Project2 from '../../assets/images/Project2.png';
import './_home.scss';


import React from 'react';

function Home(props) {
    return (
        <div className="home__container">
                <Navbar/>
                <Main/>
                <h2 className="title__project">Last projects</h2>
                <Projects 
                    heading="1. proa for enproa.co"
                    subtitle="Single Page Aplication for an electronic signature company"
                    p1="Connecting every view with React Router and binding components with the last and good practices of React Redux."
                    p2=""
                    Project1={Project1}
                    first='HTML'
                    second='CSS'
                    third='React'
                    fourth='Aws'
                />
                <Projects
                    heading="Single Page Aplication for an electronic signature company"
                    subtitle="Website design and WebApp"
                    p1="This was a fully custom webApp that i designed from scratch in Figma. It was builded using React.js."
                    p2="Connecting every view with React Router and binding components with the last and good practices of React Redux."
                    Project1={Project2}
                    first='HTML'
                    second='JS'
                    third='React'
                    fourth='Aws'
                />
                <Projects 
                    heading="1. proa for enproa.co"
                    subtitle="Single Page Aplication for an electronic signature company"
                    p1="Connecting every view with React Router and binding components with the last and good practices of React Redux."
                    p2=""
                    Project1={Project1}
                    first='HTML'
                    second='CSS'
                    third='React'
                    fourth='Aws'
                />
                <Projects
                    heading="Single Page Aplication for an electronic signature company"
                    subtitle="Website design and WebApp"
                    p1="This was a fully custom webApp that i designed from scratch in Figma. It was builded using React.js."
                    p2="Connecting every view with React Router and binding components with the last and good practices of React Redux."
                    Project1={Project2}
                    first='HTML'
                    second='JS'
                    third='React'
                    fourth='Aws'
                />
            </div>
    );
}

export default Home;