import React from 'react';

import './index.css';
import mem001 from '@/assets/images/mem001.jpg';
import compete from '@/assets/images/compete.png';

import { Row, Col, Container, Card, Button } from 'react-bootstrap';


const Compete= () => {

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
      <>
      <img src={compete} style={{width:"100%"}}></img>
      <Container className='mycontent'>
        <Row>
          <Col xs={12}>
            <h2></h2>
            <p>
              CryptoPets is a pet development game based on the Aleo chain. Players can choose their favorite pets on the chain for incubation, and upgrade, feed, and other pet development behaviors. Each pet has a unique identifier on the chain, ensuring the uniqueness and scarcity of the pet. Players can enhance their pets' abilities and value by incubating, training, and nurturing them.
            </p>

            <p>
              At the same time, players can also gain economic benefits by trading pets with other players, including selling, purchasing, or breeding them. This creates an interesting, interactive, and economically promising gaming ecosystem for players. The use of Aleo chain technology can also provide privacy protection for pet owners' personal and asset information, providing players with a trustworthy gaming experience.
            </p>

            <p>
              In the future, CryptoPets is expected to further integrate with GameFi technology to create a more diverse and innovative gaming experience.
            </p>

            <p>
              The CryptoPets team brings together top talents from internet giants such as Shanda, AMD, and Intel. They have been deeply involved in the blockchain field for many years and have participated in the filcoin project in the past, accumulating rich experience and technical strength. The team will continue to conduct in-depth research and innovation in the fields of Aleo, Web3.0, and GameFi in the future, committed to promoting the integration of blockchain technology and the gaming industry.
            </p>


          
          </Col>
          {/* <Col xs={12}>
          <h2>CRYPTOKITTIES TEAM</h2>
          </Col> */}
            {/* { Member()} */}
        </Row>
      </Container>
      </>
    );
};
export default Compete;