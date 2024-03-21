import React from 'react';
import { useParams } from 'react-router-dom';

import './detail.css'
import { getPetData } from '../../store/rootReducer';
import { useSelector } from 'react-redux';
import jy from '@/assets/images/jiyin.svg';
import rest from '@/assets/images/rest.svg';
import rili from '@/assets/images/rili.svg';
import { Share,Heart,Eye,Fan,Grid, Globe } from 'react-bootstrap-icons'
import { Row, Col, Card, Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';


export const  Detail=()=> {
  const { petId } = useParams();
  const petData = useSelector(getPetData)
  console.log(petData);

  const renderCell = () => { 
    return petData.map((item) => {
      if (petId == item.id) { 
        return (
          <Col className='detail-box' key={item.name}>
            <Card style={{ width: '100%',marginBottom:'20px'}}>
              <div style={{ height: '500px', background: '#99a0e996' }}>
                <Card.Img src={item.picture} style={{ width: '450px', height: '450px' }} />
              </div>
              <Card.Body style={{width:'80%',margin:'0 auto'}}>
                <Card.Title className='pet-title-box'>
                  <span className='pet-title'>{item.name}</span><br />
                  <div style={{height:'10px'}}></div>
                  <Row>
                    <Col xs={12}>
                      <strong className="pet-breed"># {item.id + 15232}</strong>
                      <span className="pet-breed">
                        <img src={jy} className='subTitleIcon'></img>{item.series}
                      </span>
                      <span className="pet-breed">
                        <img src={rest} className='subTitleIcon'></img> Rest Time(5h)
                      </span>
                    </Col>
                    <Col xs={12} className='pet-share'>
                      <Button variant="light" className='share-btn'><Share /></Button>
                      <Button variant="light" className='share-btn'><Heart style={{color:'red'}}/></Button>
                    </Col>
                  </Row>
                  <Row className='top10'>
                    <Col xs={8}>
                      <span className='label'>Health:</span><br></br>
                      <ProgressBar now={item.health}  label={`${item.health}%`} />
                    </Col>
                    <Col xs={8} className='top10'>
                      <span className='label'>hunger:</span><br></br>
                      <ProgressBar now={item.hunger} />
                    </Col>
                    <Col  xs={8} className='top10'>
                      <span className='label'>level:</span><br></br>
                      <ProgressBar now={item.level} label={`${item.level}%`} />
                    </Col>
                  </Row>
                </Card.Title>
                <Card.Text style={{ textAlign: 'left', fontSize: '16px' }}>
                  {/* <strong>Breed</strong>: <span className="pet-breed">{ item.breed}</span>
                  <strong>Age</strong>: <span className="pet-age">{ item.age}</span><br />
                  <strong>Location</strong>: <span className="pet-location">{item.location}</span><br /> */}
                  <div style={{fontSize: '28px',color: '#2a2825',marginTop:'60px',marginBottom:'30px',
                  lineHeight: '1.2',
                  fontWeight: 'bolder',
    letterSpacing: '-.3px' }}>Introduce:</div>
                  <span className="pet-location">{item.special}</span><br />
                  <Row className='birth'>
                    <Col md="auto"><img src={rili} className='icon-show'></img></Col>
                    <Col className='labelArea'>
                      <span className='label'>Birthday</span><br></br>
                      <span>{item.birthday}</span>
                    </Col>
                  </Row>
                  <div style={{ fontSize: '28px',color: '#2a2825',marginTop:'60px',marginBottom:'30px',
                  lineHeight: '1.2',
                  fontWeight: 'bolder',
                    letterSpacing: '-.3px'
                  }}>Attribute variation:</div>
                  <Row  className="pet-location">
                    <Col>
                      <Row>
                        <Col md="auto" className='attribute-icon'>
                            <Fan className='attribute-icon-color icon' style={{ color: item.color }} />
                        </Col>
                        <Col  md="auto" className='set-attribute-wapper'>
                          <span className='attribute-val'>{ item.color}</span><br></br>
                          <span className='attribute-text'>Color</span>
                        </Col>
                        <Col md="auto" className='attribute-icon'>
                            <Eye className='attribute-icon-color icon' style={{ color: item.eye_color }} />
                        </Col>
                        <Col  md="auto" className='set-attribute-wapper'>
                          <span className='attribute-val'>{ item.eye_color}</span><br></br>
                          <span className='attribute-text'>Eye color</span>
                        </Col>

                        <Col md="auto" className='attribute-icon'>
                            <Eye className='attribute-icon-color icon' style={{ color: item.eye_shape }} />
                        </Col>
                        <Col  md="auto"  className='set-attribute-wapper'>
                          <span className='attribute-val'>{ item.eye_shape}</span><br></br>
                          <span className='attribute-text'>Eye Shape</span>
                        </Col>

                        <Col md="auto" className='attribute-icon'>
                            <Globe className='attribute-icon-color icon' style={{ color: 'red' }} />
                        </Col>

                        <Col  md="auto"  className='set-attribute-wapper'>
                          <span className='attribute-val'>{ item.family}</span><br></br>
                          <span className='attribute-text'>Family</span>
                        </Col>

                        <Col md="auto" className='attribute-icon'>
                            <Grid className='attribute-icon-color icon' style={{ color: 'purple' }} />
                        </Col>
                        <Col  md="auto" className='set-attribute-wapper' >
                          <span className='attribute-val'>{ item.species}</span><br></br>
                          <span className='attribute-text'>Species</span>
                        </Col>
                      </Row>
                    </Col>
      
                  </Row>
                  {/* <span className="pet-location"> */}
                    {/* <Button style={{borderRadius:'50%',width:'25px',height:'25px'}} className={item.color}>
                    </Button> */}
                    {/* {sex(item)} */}
                    
                    

                  {/* </span> */}


                  {/* <div style={{ fontSize: '28px',color: '#2a2825',marginTop:'60px',marginBottom:'30px',
    lineHeight: '1.2',
    fontWeight: 'bolder',
    letterSpacing: '-.3px' }}>Activity:</div> */}
                  {/* <ul> */}
                    {/* <li>
                      <span>5月 12, 2018 - 7:42晚上 <b>UTC</b>&nbsp;&nbsp;<a href="https://etherscan.io/tx/0xa78824086977dce6ced87e43b8a41814d0aa2f1f5ee9a94d9966890b5af00abc" target="_blank">Birthday </a></span><span>hatched by: <a href="/profile/0xBaE25a69a6eb7341EE834BE7635e247e22A1e57a">0xBaE25a69...</a></span></li>
                    <li ><span>5月 14, 2018 - 9:58晚上 <b>UTC</b>&nbsp;&nbsp;<a href="https://etherscan.io/tx/0xd95cabe38504ae6e44da9b5c906f6e386505806137c64b05a96eb454efadae88" target="_blank">Sale auction created: </a></span><span><b>Ξ0.3 - Ξ0.2</b></span>
                      <span>3 days </span></li>
                    <li><span>5月 29, 2018 - 11:49中午 <b>UTC</b>&nbsp;&nbsp;<a href="https://etherscan.io/tx/0x26f8e7f7b34b1743b954e46eeca5dd6026e42976c52946153b5577a82e7414b4" target="_blank">Purchased for </a></span><span><b>Ξ0.2</b> by: <a href="/profile/0x4717c48E3f3d63d01EE7452Fcea47CB522C56a99">0x4717c48E...</a></span></li>
                    <li ><span>6月 22, 2023 - 3:57凌晨 <b>UTC</b>&nbsp;&nbsp;<a href="https://etherscan.io/tx/0x62eca7363479391592bab8f8655ae406765450201ddf545fbceeb982eef5689d" target="_blank">Sale auction created: </a></span><span><b>Ξ0.45 - Ξ0.2</b></span>
                   <span>70 days </span></li> */}
                  {/* </ul> */}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )
      }
    })
  }


  return (
    <>
      <Row id="petTemplate" className='baseLayout'>
        {renderCell()}
      </Row>
    </>
  );
}

