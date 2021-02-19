import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Main from '../../components/main/Main';
import Navbar from '../../components/navbar/Navbar';
import Projects from '../../components/projects/Projects';
import './_home.scss';

class Home extends Component {
    render() {
        return (
            <div className="home__container">
                <Navbar/>
                <Main/>
                <Projects/>
                
                <Particles height='100vh' 
                    params={{
                        polygon: {
                            enable: false,
                            type: 'inside',
                            move: {
                                radius: 10
                            },
                            url: 'path/to/svg.svg'
                        },"particles": {
                            "number": {
                                "value": 60
                            },
                            "size": {
                                "value": 1
                            }
                        },
                          "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }} 
                />  
                

            </div>
        );
    }
}

export default Home;