import React, { Component } from 'react';
import './_projects.scss';


class Projects extends Component {
    render() {
        return (
            <div className="project__container">
                <div>
                    <h3 className="project__title">{this.props.heading}</h3>
                    <p className="project__subtitle">{this.props.subtitle}</p>
                    <p className="project__p">{this.props.p1}</p>
                    <p className="project__p">{this.props.p2}</p>
                    <a href="">{this.props.a}</a>
                </div>
                <div className="project__images--section">
                    <div className='project__images--container'>
                        <img className='project__images' src={this.props.Project1} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;