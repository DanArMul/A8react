import React, {Component,createElement, useState} from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Input, Card, Tabs,  Row, Col, Button, notification} from 'antd';
import {HeartOutlined, HeartFilled} from '@ant-design/icons';
import data from "./data.json";
import FoodContext from './foodContext'
import Detail from './Detail'

class Add extends Component{

    constructor(props){
        super(props)
        this.state = {
            foods:data.Foods,
            search:"",
            sendItem:[]
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    likeOrDislike(i){
        let items = [...this.state.foods];
        let item = {...items[i]};
        if(item.like == 0){
            alert("Added to liked list")
            item.like = 1;
        }else{
            alert("Removed from liked list")
            item.like = 0;
        }
        items[i] = item;
        this.setState({
            foods:items
        })
    }

    addToBreak(i){
        let items = [...this.state.foods];
        let item = {...items[i]};
        this.setState({
            sendItem: this.state.sendItem.concat(item)
        })
    }


    handleSearch(value){
        this.setState({search: value})
    }

    render(){
        return(
            <FoodContext.Provider value={this.state.sendItem} >
            <div>

                <Detail></Detail>

               <Card style={{margin:80, display:'block', marginLeft:'auto', marginRight:'auto', width:800, background:'#f5f5f5', borderRadius:'20px'}}>
               <div><Search placeholder="input search text"  onSearch={this.handleSearch.bind(this)} style={{ width: 750 }} /></div>
               <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Recent add" key="1">
                    <div>{
                            this.state.foods.map( (food,i) => {
                                
                                if(this.state.search === ""){
                                return (
                                    <Row style = {{padding:10}} key={i}>
                                        <Col span = {8}><img style={{height:100, width:100}} src ={food.picture} alt="pic" /></Col>
                                        <Col span = {8}>{food.item}</Col>
                                        <Col span = {4}>{food.kcal} Kcal</Col>
                                        <Col span = {2}><Button onClick = {this.addToBreak.bind(this,i)}>Add</Button></Col>
                                        <Col span = {1}></Col>
                                        <Col span = {1} onClick = {this.likeOrDislike.bind(this, i)} >{createElement(food.like === '1' ? HeartFilled : HeartOutlined)}</Col>
                                    </Row>
                                )}
                                else{
                                    if(food.item === this.state.search){
                                        return (
                                            <Row style = {{padding:10}} key={i}>
                                                <Col span = {8}><img style={{height:100, width:100}} src ={food.picture} alt="pic" /></Col>
                                                <Col span = {8}>{food.item}</Col>
                                                <Col span = {4}>{food.kcal} Kcal</Col>
                                                <Col span = {2}><Button onClick = {this.addToBreak.bind(this,i)}>Add</Button></Col>
                                                <Col span = {1}></Col>
                                                <Col span = {1} onClick = {this.likeOrDislike.bind(this, i)} >{createElement(food.like === '1' ? HeartFilled : HeartOutlined)}</Col>
                                            </Row>
                                        )}
                                    }
                            })
                        }
                    </div>

                </TabPane>
                <TabPane tab="Liked" key="2">
                <div>{
                            this.state.foods.map( (food,i) => {
                                if(food.like == 1){
                                    return (
                                        <Row style = {{padding:10}} key={i}>
                                            <Col span = {8}><img style={{height:100, width:100}} src ={food.picture} alt="pic" /></Col>
                                            <Col span = {8}>{food.item}</Col>
                                            <Col span = {4}>{food.kcal} Kcal</Col>
                                            <Col span = {2}><Button>Add</Button></Col>
                                        </Row>
                                )
                                    }
                            })
                        }
                    </div>
                </TabPane>
                </Tabs>
                </Card>
            </div>
            </FoodContext.Provider>
        )
    }
}
export default Add;

const { Search } = Input;

const { TabPane } = Tabs;



