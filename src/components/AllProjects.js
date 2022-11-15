import React from 'react';
import Project from './Project.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AllProjects() {
    return (
        <Row xs={1} md={2} className="g-4 py-3 mx-auto">
            <Col>
              <Project />
            </Col>
            <Col>
              <Project />
            </Col>
            <Col>
              <Project />
            </Col>
            <Col>
              <Project />
            </Col>
          
        </Row>
      );
    }

export default AllProjects