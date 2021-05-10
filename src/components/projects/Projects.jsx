import './_projects.scss';

import React from 'react';

function Projects(props) {
    return (
        <div  className="project__container">
                <div className='project__p--section'>
                    <h3 className="project__title">{props.heading}</h3>
                    <h3 className="project__subtitle">{props.subtitle}</h3>
                    <p className="project__p">{props.p1}</p>
                    <p className="project__p">{props.p2}</p>
                    <div className="badge__container">
                        <div className="badge">
                            <p>{props.first}</p>
                        </div>
                        <div className="badge">
                            <p>{props.second}</p>
                        </div>
                        <div className="badge">
                            <p>{props.third}</p>
                        </div>
                        <div className="badge">
                            <p>{props.fourth}</p>
                        </div>
                    </div>
                </div>
                <div className="project__images--section">
                    <div className='project__images--container'>
                        <img className='project__images' src={props.Project1} alt="Proa project"/>
                    </div>
                </div>
            </div>
    );
}

export default Projects;