import React, {Component} from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Card, Descriptions, Statistic, Progress, Row, Col } from 'antd';

class Main extends Component{
    render(){
        return (
            <div>
            <Card style={{margin:80, display:'block', marginLeft:'auto', marginRight:'auto', width:800, background:'#f5f5f5', borderRadius:'20px'}} >
                <Descriptions title="Weight" >
                    <Descriptions.Item><Statistic title = "Now" value ={60.5}></Statistic></Descriptions.Item>
                    <Descriptions.Item><Statistic title = "Already Lose" value = {2.5}></Statistic></Descriptions.Item>
                    <Descriptions.Item><Statistic title = "Goal" value = {50}></Statistic></Descriptions.Item>         
                </Descriptions>
            </Card>
            <Card style={{display:'block', marginLeft:'auto', marginRight:'auto', width:800, background:'#f5f5f5', borderRadius:'20px'}}>
                <div style={{fontWeight:'bold', fontSize:'20px'}}>Health Record <Progress type="circle" percent={90} format={percent => `${percent} % Budget`} style={{paddingLeft:'60%'}}/></div>
                <Row><Col span={16}>Left</Col><Col span={16}>205 Kcal</Col></Row>
                <Row><Col span={16}>Breakfast</Col><Col span={16}>280 Kcal</Col></Row>
                <Row><Col span={16}>Lunch</Col><Col span={16}></Col> 920 Kcal </Row>
                <Row><Col span={16}>Extra Meal</Col><Col span={16}> - </Col></Row>
                <Row><Col span={16}>Dinner</Col><Col span={16}></Col> - </Row>
                <Row><Col span={16}>Exercise</Col><Col span={16}></Col> 90 Kcal</Row>
                <Row><a href ='./Add'>More detail </a></Row>
                <a href ='./Search'>Find your recipe!</a>
            </Card>
            </div>
        )
    }
}
export default Main;

