import React from 'react';
import Header from '../../Components/Header';
import Information from './Assets/Information';
import Content from './Assets/Content';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const Day1 = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Tab.Container id='list-group-tabs-example' defaultActiveKey='#info'>
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item action href='#info'>
                  Information
                </ListGroup.Item>
                <ListGroup.Item action href='#content'>
                  Content
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey='#info'>
                  <Information />
                </Tab.Pane>
                <Tab.Pane eventKey='#content'>
                  <Content />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
};

export default Day1;
