import "./UserProfile.css";

import { Button, Col, Form, Input, message, Row } from "antd";
import React from "react";

import {getUserInfo} from "../../services/userService";
import {saveUserInfo} from "../../services/userService";

export class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        this.state = {
            userId: -1,
            userType: -1,
            userName: '',
            school: '',
            ID: '',
            phone: '',
            email: ''
        };
    }

    usernameOnChange = (e) => {
        this.setState({userName: e.target.value});
    };

    schoolOnChange = (e) => {
        this.setState({school: e.target.value});
    };

    IDOnChange = (e) => {
        this.setState({ID: e.target.value});
    };

    phoneOnChange = (e) => {
        this.setState({phone: e.target.value});
    };

    emailOnChange = (e) => {
        this.setState({email: e.target.value});
    };


    componentDidMount() {
        // this._getUserInfo();
    }

    _getUserInfo = () => {
        const userInfo = JSON.parse(localStorage.getItem('user'));
        const userId = userInfo.user.userId;
        const callback = (data) => {
            if (data.state === 200) {
                const userInfo = data.data.user;
                this.setState({
                    userId: userInfo.userId,
                    userType: userInfo.userType,
                    userName: userInfo.userName,
                    school: userInfo.school,
                    ID: userInfo.ID,
                    phone: userInfo.phone,
                    email: userInfo.email
                });
                message.success(data.message);
            }
            else if (data.state === 306) {
                message.error(data.message);
            }
            else if (data.state === 403) {
                message.error(data.message);
            }
        };
        getUserInfo(userId, callback);
    };

    _saveUserInfo = () => {
        const userInfo = {
            userId: this.state.userId,
            userType: this.state.userType,
            userName: this.state.userName,
            school: this.state.school,
            ID: this.state.ID,
            phone: this.state.phone,
            email: this.state.email
        };
        const callback = (data) => {
            if (data.state === 200){
                message.success(data.msg);
            }
            else {
                message.error(data.msg);
            }
        };
        saveUserInfo(userInfo, callback);
    };

    // eslint-disable-next-line no-unused-vars
    onSubmit = (values) => {
        console.log(this.state);
        this._saveUserInfo();
        // test
        // const obj = {
        //     id: 11,
        //     name: 'name',
        //     email: 'email',
        //     phone: 'phone',
        //     school: 'school'
        // };
        // this.formRef.current.setFieldsValue(obj);
        // console.log(this.formRef.current);
    };

    onReset = () => {
        this.formRef.current.resetFields();
    };

    onFill = () => {
        // console.log(this.formRef.current);
    };

    render() {
        const userInfo = this.state;
        return (
            <div className="user-profile">
                <div className="profile-title">
                    <p>更新我的个人信息</p>
                </div>
                <div className="profile-table">
                    <Row>
                        <Col span={16}>
                            <Form ref={this.formRef} name="user-profile" onFinish={this.onSubmit}>
                                <Row style={{marginTop:10}}>
                                    <Col span={12}>
                                        <Form.Item name="id" label="学号" rules={[{required: true, message:"请输入学号"}]}>
                                            <Input placeholder="学号或工号"
                                                   style={{width:240, height:40, borderRadius:5}}
                                                   value={userInfo.userId}
                                                   onChange={this.IDOnChange}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item name="name" label="姓名" rules={[{required: true, message:"请输入姓名"}]}>
                                            <Input placeholder="请输入姓名"
                                                   style={{width:240, height:40, borderRadius:5}}
                                                   value={userInfo.userName}
                                                   onChange={this.usernameOnChange}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row style={{marginTop:10}}>
                                    <Col span={12}>
                                        <Form.Item name="email" label="邮箱" rules={[{required: true, message:"请输入邮箱"}]}>
                                            <Input placeholder="输入邮箱"
                                                   style={{width:240, height:40, borderRadius:5}}
                                                   value={userInfo.email}
                                                   onChange={this.emailOnChange}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item name="phone" label="手机" rules={[{required: true, message:"请输入手机"}]}>
                                            <Input placeholder="请输入手机号"
                                                   style={{width:240, height:40, borderRadius:5}}
                                                   value={userInfo.phone}
                                                   onChange={this.phoneOnChange}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row style={{marginTop:10}}>
                                    <Col span={12}>
                                        <Form.Item name="school" label="学校" rules={[{required: true, message:"请输入学校"}]}>
                                            <Input placeholder="请输入学校"
                                                   style={{width:240, height:40, borderRadius:5}}
                                                   value={userInfo.school}
                                                   onChange={this.schoolOnChange}
                                            />
                                        </Form.Item>
                                    </Col>
                                    {/* <Col span={12}>*/}
                                    {/*    <Form.Item name="class" label="班级" rules={[{required: true, message:"请输入姓名"}]}>*/}
                                    {/*        <Input placeholder="请输入班级" style={{width:240, height:40, borderRadius:5}} value={userInfo.school}/>*/}
                                    {/*    </Form.Item>*/}
                                    {/* </Col>*/}
                                </Row>
                                <Form.Item>
                                    <Button htmlType="submit" className="profile-pic-button">保存</Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col span={8}>
                            <div className="cus-avator">
                                <div className="cus-avator-title">
                                    <p>头像</p>
                                </div>
                                <div className="cus-avator-pic">

                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        );
    }
}
