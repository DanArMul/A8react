    import React, {Component, useState} from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Card, Descriptions, Statistic, Progress, Row, Col } from 'antd';
import {Helmet} from 'react-helmet';
import './main.css';

class Main extends Component{

    constructor(){
        super();
        this.state = {
            weight: 0,
            lost: 0,
            goal: 0,
            initialW: 0,
            totalprog: 0,
            progperc: 0

        }
    };

    render(){

        const changeWeight = e => {
            this.setState({
                weight: e.target.value
            })
            
        };

        const changeLost = e => {
            this.setState({
                lost: e.target.value
            })
            
        };

        const changeGoal = e => {
            this.setState({
                goal: e.target.value
            })
            
            
        };

        const findProgress = () => {
            findInitialW();
            findTotalProg();
            findProgPerc();
            
        }

        const findInitialW = () => {
            this.setState((state, props) => ({
                initialW: parseFloat(this.state.weight) + parseFloat(this.state.lost)

            }));
        }

        const findTotalProg = () => {
            this.setState((state, props) => ({
                totalprog: (parseFloat(this.state.initialW) - parseFloat(this.state.goal))
                
            }));
        }

        const findProgPerc = () => {
            this.setState((state, props) => ({
                progperc: ((parseFloat(this.state.lost) / parseFloat(this.state.totalprog)) * 100).toFixed(2)
                
            }));
        }


        
        return (
            
            <div className="main">
                <Card style={{margin:80, display:'flex', marginLeft:'auto', marginRight:'auto', width:800, background:'#f5f5f5', borderRadius:'20px'}} >
                <div className= "asker">
                    <form className="weight-form">
                        <h4>Enter weight (in Kgs): </h4>
                        <input  className = "weight-bar" type='number' onChange={changeWeight}/>
                    </form>
                    <form className="lost-form">
                        <h4>Enter weight you've lost so far (in Kgs): </h4>
                        <input  className = "lost-bar" type='number' onChange={changeLost}/>
                    </form>
                    <form className="goal-form">
                        <h4>Enter your weight goal (in Kgs): </h4>
                        <input className = "goal-bar" type='number' onChange={changeGoal}/>
                    </form>
                    <form onClick={() => findProgress()} className="find-form">
				        <button className = 'find-button' type='button'>Find my progress! (Press three times)</button>
                    </form>
                    
                </div>
                </Card>
                <Card style={{margin:80, display:'flex', marginLeft:'auto', marginRight:'auto', width:800, background:'#f5f5f5', borderRadius:'20px'}} >
                    <Descriptions title="Weight (in Kgs)" >
                        <Descriptions.Item><Statistic title = "Now" value ={this.state.weight}></Statistic></Descriptions.Item>
                        <Descriptions.Item><Statistic title = "Already Lose" value = {this.state.lost}></Statistic></Descriptions.Item>
                        <Descriptions.Item><Statistic title = "Goal" value = {this.state.goal}></Statistic></Descriptions.Item>
                        <Descriptions.Item><Statistic title = "Initial Weight" value = {this.state.initialW}></Statistic></Descriptions.Item>
                        <Descriptions.Item><Statistic title = "Total Weight to be lost" value = {this.state.totalprog}></Statistic></Descriptions.Item>         
                        <Descriptions.Item><Statistic title = "Percentage Progress" value = {this.state.progperc}></Statistic></Descriptions.Item>         

                    </Descriptions>
                </Card>
                <Card style={{display:'flex', marginLeft:'auto', marginRight:'auto', width:800, background:'#f5f5f5', borderRadius:'20px'}}>
                    <div style={{fontWeight:'bold', fontSize:'20px'}}>Health Record <Progress type="circle" percent={this.state.progperc} format={percent => `${this.state.progperc} % Progress`} style={{paddingLeft:'60%'}}/></div>
                    <Row><Col span={16}>Left: </Col><Col span={16}> 205 Kcal</Col></Row>
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

