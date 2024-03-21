import React from 'react';

import './index.css';
// import mem001 from '@/assets/images/mem001.jpg';
import start001 from '@/assets/images/start001.jpg';
import start003 from '@/assets/images/start003.jpg';
import start004 from '@/assets/images/start004.jpg';
import start005 from '@/assets/images/start005.jpg';

import { Row, Col, Container, Card, Button } from 'react-bootstrap';


const Start= () => {

    return (
      <Container className='mycontent'>
        <Row>
         
          <Col xs={12} className='pic_set'>

            <h3>1、Open the app store（Google Chrome is recommended）</h3>
            <img src={start001}></img><br></br>
             <h3>2、Search for ELO wallet in browser extension application</h3>
            <img src={start003}></img><br></br>
             <h3>3、Install the LEO wallet extension</h3>
            <img src={start004}></img><br></br>
             <h3>4、Create or import wallet with the mnemonics</h3>
            <img src={start005 }></img><br></br> 
          
          </Col>
         
          
        </Row>
      </Container>
    );
};
export default Start;