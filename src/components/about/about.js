import React, {Component} from 'react';
import Section from '../section/section.js';
import {Col} from 'react-bootstrap';

export default class About extends Component{
  render() {
    return (
      <div className='about'>
          <Section sectionTitle='About Me'>
              <Col xs={12}>
                  This is the new column 12
              </Col>
          </Section>
      </div>
    )
  }
}
