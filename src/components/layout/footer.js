import { Row, Col, Container } from 'react-bootstrap'
import twitter from '@/assets/images/twitter.png'
import zhihu from '@/assets/images/zhihu.png'
import telegram from '@/assets/images/telegram.png'

import logo_public from '@/assets/images/logo_public.png'

import './index.css';

export const FootApp = () => { 
    return (
        <> <Container style={{width:'100%'}}>
        {/* <Row className='bottom-hr'>
            <Col xs={6} className='left-area'>
              <span className='label'>Follow Us</span>
              
            <a href="https://t.me/zklinkhk">
              <img slot="reference" src={telegram} alt="telegram" width="25px" height="25px"/>
            </a>
              
            <a
              href="https://twitter.com/zklink_hk"
              target="_blank"
            ><img
              src={twitter}
              alt="twitter"
              width="25px"
              height="25px"
            /></a>
      
            <a
              href="https://www.zhihu.com/people/cha-na-73"
              target="_blank"
            ><img
              src={zhihu}
              alt="zhihu"
              width="25px"
              height="25px"
            /></a>
          </Col>
            <Col xs={6}  className='right-area'>
              7*24 Service Time
          </Col>
        </Row> */}
        
        <Row>
        <Col xs={1} className='left-area'></Col>

          <Col xs={2} className='left-area'>
            <div>
              <a href="https://zklink.hk" style={{display:'block'}} className='text-left'>
                  <img  src={logo_public} alt="telegram" width="80px" height="80px"/>
              </a>
              <span className='logo-name'>AleoPets Swap</span> 
              {/* <span className='logo_public-text'>ZKLINK</span> */}
            </div>
        </Col>
        <Col xs={1} className='left-area'></Col>

          <Col xs={2} className='right-area'>
          <div className='color-24 font-18'>Marketplace</div>
          <div className='color-5E font-16 margin-top-10'>Explore</div>
          <div className='color-5E font-16  margin-top-10'>Blog</div>
          <div className='color-5E font-16  margin-top-10'>Help center</div>
          
        </Col>

        <Col xs={2} className='right-area'>
          <div className='color-24 font-18'>Links</div>
          <div className='color-5E font-16 margin-top-10'>Rarible API</div>
          <div className='color-5E font-16  margin-top-10'>RARI token</div>
          <div className='color-5E font-16  margin-top-10'>Bug bounty</div>
          <div className='color-5E font-16  margin-top-10'>Become a partner</div>
          
        </Col>

        <Col xs={2} className='right-area'>
          <div className='color-24 font-18'>Join us</div>
          <div className='color-5E font-16 margin-top-10'>X</div>
          <div className='color-5E font-16  margin-top-10'>Discord</div>
          
        </Col>
      </Row>
    </Container>
    </>
    )
}
