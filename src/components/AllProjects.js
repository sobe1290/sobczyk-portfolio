import React from 'react';
import Project from './Project.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AllProjectsData from '../AllProjectsData.js';



function AllProjects() {
    return (
        <Row xs={1} md={2} className="g-4 py-3 mx-auto">
            <Col>
              <Project title={AllProjectsData[0].title} url={AllProjectsData[0].url} tileImage={AllProjectsData[0].tileImage} description={AllProjectsData[0].description}/>
            </Col>
            <Col>
              <Project title={AllProjectsData[1].title} url={AllProjectsData[1].url} tileImage={AllProjectsData[1].tileImage} description={AllProjectsData[1].description}/>
            </Col>
            <Col>
              <Project title={AllProjectsData[2].title} url={AllProjectsData[2].url} tileImage={AllProjectsData[2].tileImage} description={AllProjectsData[2].description}/>
            </Col>
            <Col>
              <Project title={AllProjectsData[3].title} url={AllProjectsData[3].url} tileImage={AllProjectsData[3].tileImage} description={AllProjectsData[3].description}/>
            </Col>
            <Col>
              <Project title={AllProjectsData[4].title} url={AllProjectsData[4].url} tileImage={AllProjectsData[4].tileImage} description={AllProjectsData[4].description}/>
            </Col>
            <Col>
              <Project title={AllProjectsData[5].title} url={AllProjectsData[5].url} tileImage={AllProjectsData[5].tileImage} description={AllProjectsData[5].description}/>
            </Col>
          
        </Row>
      );
    }

export default AllProjects