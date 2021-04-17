import React, { Component } from 'react';
import Main from '../../components/main/Main';
import Navbar from '../../components/navbar/Navbar';
import Button from '../../components/button/Button';
import Projects from '../../components/projects/Projects';
import Project1 from '../../assets/images/Project1.png';
import Project2 from '../../assets/images/Project2.png';
import './_home.scss';

class Home extends Component {
    render() {
        return (
            <div className="home__container">
                <Navbar/>
                <Main/>
                <h2 className="title__project">Last projects</h2>
                <Projects 
                    heading="Single Page Aplication for an electronic signature company"
                    subtitle="Website design and WebApp"
                    p1="This was a fully custom webApp that i designed from scratch in Figma. It was builded using React.js."
                    p2="Connecting every view with React Router and binding components with the last and good practices of React Redux."
                    a="Visit enproa.co"
                    Project1={Project1}
                />
                <Projects
                    heading="Single Page Aplication for an electronic signature company"
                    subtitle="Website design and WebApp"
                    p1="This was a fully custom webApp that i designed from scratch in Figma. It was builded using React.js."
                    p2="Connecting every view with React Router and binding components with the last and good practices of React Redux."
                    a="Visit enproa.co"
                    Project1={Project2}
                />
            </div>
        );
    }
}

export default Home;