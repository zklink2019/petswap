import React from 'react';

import './index.css';
import mem001 from '@/assets/images/mem001.jpg';
import cz001 from '@/assets/images/cz001.jpg'
import cz002 from '@/assets/images/cz002.jpg'
import { Row, Col, Container, Card, Button,Accordion } from 'react-bootstrap';


const FAQ= () => {

  const Member = () => {
    let petData = [{}, {}, {}, {}, {},{}, {}, {}]
    return petData.map((item) => {
      return (
        <Col style={{marginTop:'15px'}}><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={mem001} style={{ width: '60%', margin: '0 auto' }} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Developer
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card></Col>
      );
    })
}



    return (
      <Container className='mycontent'>
        <Row>
          <Col xs={12}>
           <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>How to install the LEO wallet extension #1</Accordion.Header>
                <Accordion.Body>
                  LEO Wallet Installation Guide, please refer to the Getting Started Guide interface <br></br>
             
               <a href='/start'>Installation Guide</a>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
            <Accordion.Header>How to recharge the LEO wallet extension with test currency #2</Accordion.Header>
                <Accordion.Body style={{background:'none'}}>
                  <h4 style={{marginBottom:'20px'}}>1、Open LEO wallet</h4>
                  <img src={cz001}></img>
                   <h4  style={{marginBottom:'20px'}}>2、Click on the faucet and Receive test coins according to guidance</h4>
                  <img src={ cz002}></img>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </Col>
         
          
        </Row>
      </Container>
    );
};
export default FAQ;