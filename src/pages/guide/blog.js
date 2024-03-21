import React ,{ useState }from 'react';

import './index.css';
import mem001 from '@/assets/images/mem001.jpg';
import { Container, Accordion,ListGroup,Toast,ToastContainer } from 'react-bootstrap';


const Blog= () => {
const [position, setPosition] = useState('top-start');

    return (
      <Container className='mycontent'>
        <h2>Intro</h2>
        <p>
          CryptoPet is a pet development game based on the Aleo chain.

Players can choose their favorite pets on the chain for incubation, and develop behaviors such as upgrading and feeding the pets.

We will protect the privacy of users' personal information and asset information, and the status of pets will be publicly displayed.

We plan to make it into a GameFi in the future.
        </p>
        <h2>Mechanism introduction</h2>
        
      <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Pet basic attributes #1</Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <ListGroup.Item>Series</ListGroup.Item>
            <ListGroup.Item>Color</ListGroup.Item>
            <ListGroup.Item>Sex</ListGroup.Item>
            <ListGroup.Item>Family</ListGroup.Item>
            <ListGroup.Item>Species</ListGroup.Item>
            <ListGroup.Item>Eye color</ListGroup.Item>
            <ListGroup.Item><h5>Eye shape</h5> Divided into almond eyes, round eyes, oval eyes</ListGroup.Item>
            <ListGroup.Item><h5>Birthday</h5>Pets are born at the height of adoption</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Pet growth attribute #2</Accordion.Header>
        <Accordion.Body>
            <ListGroup>
              <ListGroup.Item><h5>Level</h5>Pets start at the LV1 level after adoption, and slowly level up as the chain height increases, and the feeding experience level can accelerate</ListGroup.Item>
                <ListGroup.Item><h5>Age</h5>
                Starting age is 0 years, pet per 3400 Aleo chain height, age +1
                </ListGroup.Item>
                <ListGroup.Item><h5>Health value</h5>
                  Between 0 and 100, when the health value drops to 0, the pet will be recycled
                </ListGroup.Item>
                <ListGroup.Item><h5>Hunger value</h5>
                  Between 0 and 10, when the hunger value is reduced to 0, the health value will be -10 every 1700 Aleo chain heights
                </ListGroup.Item>
            </ListGroup>
        </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
        <Accordion.Header>Adopt #3</Accordion.Header>
        <Accordion.Body>
            <ListGroup>
                <ListGroup.Item>
                  Adoption information can be viewed on the chain
                </ListGroup.Item>
            </ListGroup>
        </Accordion.Body>
          </Accordion.Item>
      
      <Accordion.Item eventKey="3">
        <Accordion.Header>Feed #4</Accordion.Header>
        <Accordion.Body>
            <ListGroup>
                <ListGroup.Item>
                  When the pet is fed a favorite food, the hunger value increases by 2; Feeding others increases hunger by 1
                </ListGroup.Item>
                <ListGroup.Item><h5>Age</h5>
                When pet hunger is 0, the pet's health will be reduced by 10 for every 1700 heights, for 17,000 consecutive heights, and the pet will be recovered (about 10 days).
                </ListGroup.Item>
            </ListGroup>
        </Accordion.Body>
          </Accordion.Item>
          
      <Accordion.Item eventKey="4">
        <Accordion.Header>Pet recycling #5</Accordion.Header>
        <Accordion.Body>
            <ListGroup>
                <ListGroup.Item>
                  When the pet's health value drops to 0, the pet is recycled and re-hatched
                </ListGroup.Item>
                <ListGroup.Item>
                When an adopter causes pet recycling, the favorability rating of other pets owned by the adopter increases by -5
                </ListGroup.Item>
            </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
          
         
    </Accordion>
      </Container>
    );
};
export default Blog;