import React, { useEffect,useRef,useState } from 'react';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Row,Col,Button,Navbar,Nav,Container,NavDropdown,Overlay,Alert } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux';
import { getPublicAddress } from '../../store/rootReducer';
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { setPublicAddress,setInitFood,setContractRecord } from '../../store/rootReducer';

import {
  WalletAdapterNetwork,
  DecryptPermission,
  WalletNotConnectedError
} from "@demox-labs/aleo-wallet-adapter-base";
import logo from '@/assets/images/logo.png'


export const HeadApp = () => {
    const publicAddress = useSelector(getPublicAddress);
    const [show, setShow] = useState(false);
    const [infoshow, setInfoShow] = useState(false);
    const [title, setTitle] = useState('');
    const [info, setInfo] = useState('');
    const [timer, setTimer] = useState(null);
    
    const target = useRef('');
    
    const { wallet, wallets,publicKey } = useWallet();
    const dispatch = useDispatch();

    const getRecord = async () => {
        const program = "credits.aleo";
        if (!window.leoWallet.publicKey) {
            throw new WalletNotConnectedError();
        }
        // console.log(window.leoWallet.requestRecords)
        if (window.leoWallet.requestRecords) {
        const records = await window.leoWallet.requestRecords(program);
        // console.log(records.records)
        }
    };

    // const getFeedRecord = async () => { 
    //     console.log("getFeedRecord")
    //     const program = "cryptopet.aleo";
    //     if (!window.leoWallet.publicKey) {
    //         throw new WalletNotConnectedError();
    //     }
    //     // console.log(window.leoWallet.requestRecords)
    //     if (window.leoWallet.requestRecords) {
    //         const records = await window.leoWallet.requestRecords(program);
    //             console.log("cryptopet.aleo get record")
    //             console.log(records.records)
    //             dispatch(setContractRecord(records.records))
    //     }
    // }
    
    // 获取粮食界面
    const getFood = (Address) => { 
        // console.log("getFood:", Address)
        // console.log()
        // console.log(this.props)
        if (Address == "") { 
            // console.log("not value")
            return false;
        }
        const _this = this;
        //http://172.30.56.64:5200/api/v1/pet/baginfo/:address
        let url = '/api/v1/pet/baginfo/'+Address;
        fetch(url, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then((response) => {
            if (response.status == 200) {
            return response.json()
            } else {
            return []
            }
        })
        .then(data => {
            let newData = data.data
            // console.log(data)
            dispatch(setInitFood(data.data))
        })
        .catch((error) => console.log(error))
    }

    const onConnect = () => { 
        if (wallets[0].readyState=== "NotDetected") { 
            setShow(!show);
            return false;
        }else if (window.leoWallet.publicKey === undefined) { 
            console.log("钱包连接")
            window.leoWallet.connect(DecryptPermission.AutoDecrypt, WalletAdapterNetwork.Testnet).then((data) => {
                console.log("连接后的数值", window.leoWallet.publicKey)
                dispatch(setPublicAddress(window.leoWallet.publicKey))
                getFood(window.leoWallet.publicKey)
                // getFeedRecord();
                let time_task=setInterval(() => {
                    //需要定时执行的方法
                    getFood(window.leoWallet.publicKey)
                }, 10000)
                setTimer({timer:time_task});
            }).catch((error) => { 
                // console.log("error11")
                // console.log(typeof (error))
                // console.log(JSON.stringify(error))
                setInfo(error.message)
                // setTitle(error.name)
                setInfoShow(true)
                // console.log("error22")
            } )
        }
    }
    
    useEffect(() => {
        setInfoShow(false)
        // onConnect();
    }, [wallet,publicKey])
    const BtnShow = () => { 
        if (publicAddress == '') {
            return  <Nav.Link href="#pricing">
                        <Button variant="dark" ref={target} onClick={onConnect}>
                        <span className='font-14'>  Connect</span>
                        </Button> 
                    </Nav.Link>
        }
        else { 
            return<>
             <NavDropdown title="Mine" id="basic-nav-dropdown" className='mTop5'>
                            <NavDropdown.Item href="/mine">My Pet</NavDropdown.Item>
                            {/* <NavDropdown.Item href="/">Exits</NavDropdown.Item> */}
                        </NavDropdown>
                {/* <Nav.Link href="#pricing">
                        <Button onClick={getRecord}>
                            GetRecord    
                        </Button>
                </Nav.Link> */}
            </>
        }     
    }

    return (
    <> <Container>
      <Row className='header'>
        <Col className='left-area'>
            <Container>
                <a href='/' className='logo' >
                    <img src={logo} alt="" style={{ width: '50px', marginRight: '10px'}} />
                           <span className='logo-name'>AleoPets Swap</span> 
                </a>
            </Container>
        </Col>
        <Col className='right-area'>
            <Navbar  className='right'>
                <Container>
                    <Nav className="me-auto">
                        {/* <Nav.Link href="/"  className='mTop5'>
                            Home   
                        </Nav.Link> */}
                        <Nav.Link href="/compete" className='mTop5 '>
                            <span className='font-14'>Competition</span>
                        </Nav.Link>
                                
                        <NavDropdown title="Guide" id="basic-nav-dropdown" className='mTop5 font-14'>
                            <NavDropdown.Item href="/start">Start</NavDropdown.Item>
                            <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
                            <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>     
                            {/* <NavDropdown.Item href="/about">About Us </NavDropdown.Item>    */}
                        </NavDropdown>
                        <Nav.Link href="/about"  className='mTop5 font-14'>
                        <span className='font-14'>About Us    </span>
                        </Nav.Link>
                       
                        {/* <Nav.Link href=""  className='mTop5'>
                                <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
                        Click me to see
                            </Button>
                        </Nav.Link> */}
                            { BtnShow()}
                    </Nav>
                </Container>
            </Navbar>
                </Col>
                <Col xs={12}>
                    <Overlay target={target.current} show={show} placement="bottom">
                {({
                placement: _placement,
                arrowProps: _arrowProps,
                show: _show,
                popper: _popper,
                hasDoneInitialMeasure: _hasDoneInitialMeasure,
                ...props
                }) => (
                <div
                    {...props}
                    style={{
                    position: 'absolute',
                    backgroundColor: 'rgba(255, 100, 100, 0.85)',
                    padding: '2px 10px',
                    color: 'white',
                    borderRadius: 3,
                    ...props.style,
                    }}
                >
                    Please install the Leo wallet extension
                </div>
                )}
                    </Overlay>

                    <Alert key={"info"} variant={"info"} show={infoshow} onClose={() => setInfoShow(false)} dismissible>
                         <Alert.Heading style={{width:'50%',textAlign:'left',margin:'0 auto',marginBottom:'25px'}}>Oh snap! You got an error! </Alert.Heading>
                        <p style={{width:'50%',textAlign:'left',margin:'0 auto'}}>Please check<br></br>

                            1. Is the LEO wallet xtention installed<br></br>

                            2. Do you create or own a LEO wallet account
                            <br></br>
                            <a href='/start'>Help</a>
                        </p> 
                    </Alert>
                </Col>        
      </Row>
    </Container>
    </>
    )
}
