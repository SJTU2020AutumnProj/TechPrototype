import './HomeworkHeader.css';

import {
    EditOutlined,
    ProjectOutlined,
    TeamOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Col, Menu, Row} from 'antd';
import React from "react";

export class HomeworkHeader extends React.Component {
    state = {
        current: 'Homework',
    };

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({current: e.key});
    };

    render() {
        const {current} = this.state;
        return (
            <div className="homework-header">
                <Row>
                    <Col span={4} style={{marginLeft:40}}>
                        <svg className="class-svg" viewBox="0 0 16 16" version="1.1"
                             width="16" height="16" aria-hidden="true">
                            <path fillRule="evenodd"
    d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
                        </svg>
                        <p className="homework-title"><a>六年级语文</a>&nbsp;/&nbsp;<a className="homework-name">作业一</a></p>
                    </Col>
                    <Col span={3} offset={15} style={{display:"flex", paddingTop:3}}>
                        {/*<Button className="homework-button"><EyeOutlined /> Watch</Button>*/}
                        {/*<Button className="homework-button"><StarOutlined /> Star </Button>*/}
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className="homework-menu">
                            <Menu.Item key="Homework" icon={<EditOutlined />}>
                                作 业
                            </Menu.Item>
                            <Menu.Item key="Question" icon={<UserOutlined />}>
                                问 题
                            </Menu.Item>
                            <Menu.Item key="Discussion" icon={<TeamOutlined />}>
                                讨 论
                            </Menu.Item>
                            <Menu.Item key="Score" icon={<ProjectOutlined />}>
                                分 数
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </div>
        );
    }
}
