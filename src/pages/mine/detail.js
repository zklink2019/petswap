import React from 'react';

import './index.css'
// import petData from './pets.json'
import {
  Transaction,
  WalletAdapterNetwork
} from "@demox-labs/aleo-wallet-adapter-base";
import { Row, Col, Container, Card, Button,Modal,Form,Alert } from 'react-bootstrap';

import fish from '@/assets/images/fish.svg';
import meat from '@/assets/images/meat.svg';
import honey from '@/assets/images/honey.svg';
import carrot from '@/assets/images/carrot.svg';
import cheese from '@/assets/images/cheese.svg';
import bone from '@/assets/images/bone.svg';
import ic_exp from '@/assets/images/ic_exp.svg'



class MineDetail extends React.Component{
    constructor(props) { 
        super(props);
        this.state = {
            init: false,
            adoptStatus: [],
            adoptPetUid:[],
            adoptDataObj: {},
            petDataObj: {},
            pet_uid: {},
            current_data: {},
            current_:'',
            show: false,
            errorShow:false
        };
    }

    handleClose = () => this.setState({show:false});
    handleShow = (current_user,pet) => { 
        console.log("adoptDataObj", current_user)
        this.setState({ current_data: {...current_user,...pet} })
        this.setState({show:true});
    }

    componentWillMount() { 
        this.getData();
        // 获取宠物状态
        // this.getPetProps();
        
    }
      componentWillUnmount() {
        if (this.state.timer != null) {
        clearInterval(this.state.timer);
        }
    }

    getData = async () => {
        const { petData } = this.props;
        const _this = this;
        let url = '/api/v1/pet/list/cryptopet.aleo';
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
            let petObj = {};
            let adoptPet_uids = [];
            let adoptStatus=[]
            if(newData) {
                newData.map(item => {
                    //我领养的
                if (window.leoWallet.publicKey === item.addr) {
                    let pet_id = '';
                    //宠物唯一表示
                    adoptPet_uids.push(item.pet_id)
                    for (let index in petData) { 
                        let pet = petData[index];
                        if (pet.Uid_range.indexOf(item.pet_id)!=-1) { 
                        pet_id = pet.contract_id;
                            break;
                        }
                    }
                    if (adoptStatus.indexOf(pet_id) == -1) {
                        // console.log("insert ",pet_id)
                        adoptStatus.push(pet_id)
                        petObj[pet_id] = item;
                    }
                    _this.setState({ adoptStatus: adoptStatus })
                    _this.setState({ adoptPetUid: adoptPet_uids })
                }
            })
            }
            // _this.setState({ adoptDataObj: petObj })
            _this.getPetProps(adoptPet_uids);
            _this.state.timer = setInterval(() => {
            //需要定时执行的方法
                    _this.getPetProps(adoptPet_uids);
            }, 10000)
           
        })
        .catch((error) => console.log(error))
    };

    // 获取宠物经验值，健康值等
    getPetProps = async (adoptPet_uids) => {
        console.log("领养的宠物", adoptPet_uids)
        let url = '/api/v1/pet/getprop';
        let data = {
            program_id:"cryptopet.aleo",
            uids:adoptPet_uids
        };
    
        const _this = this;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data) 
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
            let petObj = _this.state.adoptDataObj;
            if (newData) {
                newData.map(item => {
                    petObj[item.pet_type] = {...petObj[item.pet_type], ...item};
                })
                _this.setState({ adoptDataObj: petObj })
            }
        })
        .catch((error) => console.log(error))
    }
    // 初始化食物
    getFoodCell = () => { 
        const { init_food } = this.props;
        return <><Container>
        <Row className='food'>
        <Col xs={12} className='foot-title'>
                    Pet  Food
        </Col>
        <Col>
            <img src={ic_exp} className='food-pic'></img>
                    <span className='food-text'>{ init_food.Exp}(g)</span>
        </Col>

        <Col>
            <img src={fish} className='food-pic'></img>
            <span className='food-text'>{ init_food.Fish}(g)</span>
        </Col>
        <Col>
            <img src={meat} className='food-pic'></img>
            <span className='food-text'>{ init_food.Meat} (g)</span>
        </Col>
        <Col>
            <img src={honey} className='food-pic'></img>
            <span className='food-text'>{ init_food.Honey} (g)</span>
        </Col>
        <Col>
            <img src={carrot} className='food-pic'></img>
            <span className='food-text'>{ init_food.Carrot}  (g)</span>
        </Col>
        <Col>
            <img src={cheese} className='food-pic'></img>
            <span className='food-text'>{ init_food.Cheese}  (g)</span>
        </Col>
        <Col>
            <img src={bone} className='food-pic'></img>
            <span className='food-text'>{ init_food.Bone}  (g)</span>
        </Col>
      </Row>
    </Container></>
    }

    handleChange = (event) => {

        const { current_data } = this.state;
         this.setState({ current_data: {...current_data,food_type:event.target.value} })

    }
    
    getModel = () => { 
       const { init_food } = this.props;
        // console.log(this.state.current_data)
        return  <><Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose Food</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                {/* 宠物编号: {this.state.current_data.pet_id}<br></br>
                宠物类别: {this.state.current_data.species} */}
                <Alert  show={this.state.errorShow}  key="danger" variant="danger" onClose={() => this.setState({errorShow:false})} dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                   <p>Please select the type of food!!</p> 
                </Alert>
                <Form>
                    <Form.Select onChange={this.handleChange}   aria-label="Default select example">
                        <option value="0">select the type of food</option>
                       {init_food.Exp>0? <option value="1"> Exp+ ({init_food.Exp} g)</option>:""}
                       {init_food.Fish>0? <option value="2">Fish ({init_food.Fish} g)</option>:""}
                       {init_food.Meat>0?  <option value="3">Meat ({init_food.Meat} g)</option>:""}
                       {init_food.Honey>0?  <option value="4">Honey ({init_food.Honey} g)</option>:""}
                        {init_food.Carrot>0? <option value="5">Carrot ({init_food.Carrot} g)</option>:""}
                        {init_food.Cheese>0? <option value="6">Cheese ({init_food.Cheese} g)</option>:""}
                        {init_food.Bone>0? <option value="7">Bone ({init_food.Bone} g)</option>:""}
                    </Form.Select>
                </Form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
                <Button variant="primary" onClick={() => {
                    if (this.state.current_data.food_type!="0" )
                    { this.feed() }
                    else
                    { 
                    this.setState({errorShow:true})
                } }}>
            Confirm
          </Button>
        </Modal.Footer>
        </Modal>
        </> 
    }

    // 在事件处理程序中进行编程式导航
    handleDetailButtonClick = (pet_id) => {
        window.open(`/detail/${pet_id}`)
    };

    //喂养
    feed = () => {
        const { current_data: { species,food_type } } = this.state;
        let add_hungry = '0u8'
        let add_level = '0u8'
        let add_health = '0u8'
        if (food_type === "1") {
            add_level = '1u8'
        } else if (
            (food_type === "2" && species === 'cat' ) ||
            (food_type === "3" && species === 'dog') ||
            (food_type === "4" && species === 'mouse') ||
            (food_type === "5" && (species === 'lion'||species === 'fox')) ||
            (food_type === "6" && species === 'bear') ||
            (food_type === "7" && species === 'carrot')
        ){
            add_health = '2u8'
            add_hungry = '2u8'
        }else {
            add_health = '1u8'
            add_hungry = '1u8'
        }
        //调用合约
        this.handleFeed(add_health, add_hungry, add_level)
        this.handleClose();
    };

    // 领养
    handleFeed = async (add_hungry,add_health,add_level) => {
        const _this = this;
        if (!window.leoWallet.publicKey) {
        await this.onConnect();
        // throw new WalletNotConnectedError();
        }
        const { current_data } = this.state;
        // console.log(current_data)
    //  adopter: address,pet_uid: u16, pet_type: u16
        const inputs = [window.leoWallet.publicKey,current_data.uid,add_hungry,add_health,add_level,new Date().getTime()+'field'];
        console.log("inputs",inputs)
        const fee = 10_000_000;

        const aleoTransaction = Transaction.createTransaction(
        window.leoWallet.publicKey,
        WalletAdapterNetwork.Testnet,
        'cryptopet.aleo',
        'feed',
        inputs,
        fee
        );
        if ( window.leoWallet.requestTransaction) {
        // Returns a transaction Id, that can be used to check the status. Note this is not the on-chain transaction id
        await  window.leoWallet.requestTransaction(aleoTransaction).then(function (value) {
            console.log("value: ", value)
            _this.postFeed();
            return value
        }).catch((error) => { 
            console.log(error)
        });
        }
    };

    postFeed = async () => {
        const { current_data } = this.state;
        let data = {
            feeder:current_data.addr,
            food_type:current_data.food_type,
            change:-1,
        }
        const _this = this;
        let url = '/api/v1/pet/savebag';
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
                },
            body:JSON.stringify(data)
        })
        .then((response) => {
            if (response.status == 200) {
            return response.json()
            } else {
            return []
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch((error) => console.log(error))  
    }
    
    renderCell = () => { 
        const { petData } = this.props;
        const { adoptDataObj } = this.state;
        // console.log("**********************adoptDataObj**********************",adoptDataObj)
        
        return petData.map((item) => {
            // console.log("render")
            let hungry = item.hunger;
            let health = item.health;
            let level = item.level;
            let hungry_text = '';
            let health_text = '';
            let level_text = "LV ";
            if (JSON.stringify(adoptDataObj) != "{}" && adoptDataObj?.[item.contract_id]!=undefined) { 
                hungry = adoptDataObj?.[item.contract_id].hungry;
                hungry_text=hungry.replaceAll('u8', '')
                hungry = parseInt((Number(hungry.replaceAll('u8', '')) * 100 / 12)) + "%";
                health = adoptDataObj?.[item.contract_id].health;
                health_text = health.replaceAll('u8', '');
                health = parseInt((Number(health.replaceAll('u8', ''))*100 / 102)) + "%";
                level = adoptDataObj?.[item.contract_id].level;
                level =  level.replaceAll('u8', '');
                level_text = level_text + level;
                level = '100%';
            }

        if (this.state.adoptStatus.indexOf(item.contract_id) != -1) {
            return (
            <Col  xs={4} md={3} key={item.name} className='justify'>
                <Card style={{ width: '100%',marginBottom:'20px'}}>
                <Card.Img variant="top" src={item.picture} />
                <Card.Body>
                <Card.Title>{ item.name}</Card.Title>
                            <Card.Text style={{ textAlign: 'left', fontSize: '14px' }}>
                                <Row>
                                    <Col xs={12}><span className='data_label'>健康值: {health_text}</span>
                                    <span className='data_val'>
                                        <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={health}
                                        aria-valuemin="0" aria-valuemax="100" style={{width:health}}>
                                           {health}
                                        </div>
                                        </div>
                                    </span></Col>
                                    <Col xs={12}><span className='data_label'>饥饿值: {hungry_text}</span><span className='data_val'>
                                    
                                        <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={hungry}
                                        aria-valuemin="0" aria-valuemax="100" style={{width:hungry}}>
                                           {hungry}
                                        </div>
                                        </div>
                                    </span></Col>
                                    <Col xs={12}><span className='data_label'>经验值:</span><span className='data_val'>
                                    
                                        <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={level}
                                        aria-valuemin="0" aria-valuemax="100" style={{width:level}}>
                                            {level_text}
                                        </div>
                                        </div>
                                    </span></Col>
                                    <Col xs={12} style={{paddingTop:'15px'}}>
                                        <Button onClick={() => { 
                                            this.handleShow(adoptDataObj?.[item.contract_id],item)
                                        }}>Feed
                                        </Button>
                                         <Button  variant="light" className='detail_icon' onClick={()=>this.handleDetailButtonClick(item.id)} >Detail</Button>
                                    </Col>
                                </Row>
                        {/* <strong>Breed</strong>: <span className="pet-breed">{ item.breed}</span><br />
                        <strong>Age</strong>: <span className="pet-age">{ item.age}</span><br />
                                <strong>Location</strong>: <span className="pet-location">{item.location}</span> */}
                                
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            )
        }
        })
    }

    render() { 
        
        return (
            <>
            <Container>
                <h1 style={{ paddingTop: "50px", paddingBottom: "50px" }}>The pet I adopted</h1>
                <Row><Col>{ this.getFoodCell()}</Col></Row>
                <Row id="petTemplate" className='baseLayout'>
                        {this.renderCell()}
                        {this.getModel()}
                </Row>
            </Container>
            </> 
        )
    }
}

export default MineDetail;