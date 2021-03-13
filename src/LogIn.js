// page setting
import React, {Component} from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Form, Input, Button} from 'antd';

import FacebookLoginWithButton from 'react-facebook-login';
import { Redirect } from "react-router-dom";

class LogIn extends Component{
    constructor(props){
      super(props)
        this.state = {redirect: null}
        this.facebookResponse = (response) => { console.log( response ); this.setState( {...this.state, redirect: "/Main"} ) }
        this.onFinish = this.onFinish.bind(this)
      }

      onFinish(){
        this.setState({
          redirect: "/Main"
        })
      }
   
    render(){

      if(this.state.redirect){
        return <Redirect to = {this.state.redirect} />
      }else{

        return (
          <div style={{width: '90%'}}>
        <div style={{paddingTop:200, paddingLeft:10}}>
            <h1 style={{textAlign:'center'}}>Go Go Diet</h1>
            <Form
            {...layout}
            name="basic"
            initialValues={{
            remember: true,
            }}
            onFinish={this.onFinish}
            //onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label="Username"
                name="username"
                rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
            ]}
            >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <Form.Item {...tailLayout}>
        <LoginButton facebookResponse={this.facebookResponse}/>
        </Form.Item>
      </Form>
      </div>
      </div>
      )
    }
  }
}
export default LogIn;

const LoginButton = ({facebookResponse}) => (
  <FacebookLoginWithButton
    appId="1077034392801457"
    // autoLoad
    fields="name,email,picture"
    callback={facebookResponse}
    icon="fa-facebook"/>
  )

const layout = {
    labelCol: {
     offset:5,
      span: 2,
    },
    wrapperCol: {
      span: 10,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 7,
      span: 10,
    },
  };
  

