import 'antd/dist/antd.css';
import './headercss.css';

import { DownOutlined } from '@ant-design/icons';
import { Col, Dropdown, Input, Menu, Row } from 'antd';
import React from 'react';

import logo from '../../assets/logo.png';

const { Search } = Input;

class MyHeader extends React.Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a href={'#'}>界面美观</a>
        </Menu.Item>
        <Menu.Item>
          <a href={'#'}>响应及时</a>
        </Menu.Item>
        <Menu.Item>
          <a href={'#'}>功能强大</a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="header">
        <div className="header-wrapper">
          <Row style={{ height: 28 }}>
            <Col span={1} style={{ height: 28, paddingLeft:15}}>
              <a href={'/'}>
              <img src={logo} alt={'logo'} height={30} width={30} />
              </a>
            </Col>
            <Col span={2} style={{ height: 28 }}>
              <Dropdown overlay={menu}>
                <a className="header-link" onClick={(e) => e.preventDefault()}>
                  为什么选择小箱交 <DownOutlined />
                </a>
              </Dropdown>
            </Col>
            <Col span={1} style={{ height: 28, marginLeft:10 }}>
              <a href={'/'} className="header-link">我的主页</a>
            </Col>
            <Col span={1} style={{ height: 28, marginLeft:10 }}>
              <a href={'/class'} className="header-link">我的课程</a>
            </Col>
            <Col span={1} style={{ height: 28, marginLeft:10 }}>
              <a href={'/homework'} className="header-link">我的作业</a>
            </Col>
            <Col span={1} style={{ height: 28, marginLeft:10 }}>
              <a href={'/release'} className="header-link">发布作业</a>
            </Col>
            <Col span={1} style={{ height: 28, marginLeft:10 }}>
              <a href={'/correct'} className="header-link">批改作业</a>
            </Col>
            {/* <Col span={1} style={{ height: 28, marginLeft:10 }}>*/}
            {/*  <a href={'/score'}className="header-link">我的分数</a>*/}
            {/* </Col>*/}
            <Col span={4} offset={8} style={{ height: 28 }}>
              <Search placeholder="搜索课程" onSearch={(value) => console.log(value)} style={{ width: 200, height: 28 }} />
            </Col>
            <Col span={1}>
              <a href={'/login'} className="header-link">登 录</a>
            </Col>
            <Col>
              <a href={'/register'} className="header-link sign-up">注 册</a>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default MyHeader;
