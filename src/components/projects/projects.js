import React, {Component} from 'react';
import {Col, Image} from 'react-bootstrap';
import Section from '../section/section';
import placehold from './placehold.gif';
import './projects.css';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: {
        projectName: 'asdfsfsdfs',
        description: 'asdfs',
      },
      projects: [
        {
          projectName: 'Chef Joannas',
          description: 'this is the first project;'
        },
        {
          projectName: 'project 2',
          description: 'this is the 2nd project;'
        },
        {
          projectName: 'project 3',
          description: 'this is the3rd project;'
        },
        {
          projectName: 'project 4',
          description: 'this is the4th project;'
        },
        {
          projectName: 'project 5',
          description: 'this is the5thproject;'
        },
        {
          projectName: 'project 6',
          description: 'this is the 6th project;'
        }
      ]
    }
  }

  renderTiles = () => {
    return this.state.projects.map(item => {
      return (
        <Image src={placehold} className='tile' onClick={() => this.handleSelectProject(item)}/>
      )
    })
  }

handleSelectProject = (project) => {
  this.setState({selectedProject:project})
}

  renderProject = () => {
    return (
      <div>
        <h3>{this.state.selectedProject.projectName}</h3>
        <p>{this.state.selectedProject.description}</p>
      </div>

    )
  }



  render() {
    return (
      <div className='projects'>
        <Section sectionTitle='Projects'>
          <Col xs={4}>
            {this.renderProject()}
          </Col>
          <Col xs={6}>
            {this.renderTiles()}

          </Col>
        </Section>

      </div>
    )
  }
}
