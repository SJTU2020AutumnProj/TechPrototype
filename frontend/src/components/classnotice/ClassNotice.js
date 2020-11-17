import "./ClassNotice.css";

import {DeleteOutlined, DownOutlined, PlusOutlined} from '@ant-design/icons';
import {Button, Col, Divider, Dropdown, Input, Menu, Row} from "antd";
import React from 'react';

import AnnouncementCell from "../announcementcell/AnnouncementCell";

const announcementContentEx = [
    {title: "期末考试通知", content: "各位同学好，本学期课程已经进入尾声，本课程期末考试安排如下...", time: "2020年11月15日 15:15:15"},
    {title: "期末考试通知2", content: "各位同学好，本学期课程已经进入尾声，本课程期末考试安排如下...", time: "2020年11月15日 15:15:15"}
];

function handleMenuClick(e) {
    console.log('click', e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            全部
        </Menu.Item>
        <Menu.Item key="2">
            未读
        </Menu.Item>
    </Menu>
);

const {Search} = Input;

export class ClassNotice extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const announcementContent = announcementContentEx.map((item) => (
            <AnnouncementCell announcement={item} key={item.title}/>));

        return (
            <div className="class-notice">
                <Row>
                    <Col span={20}>
                        <div className="announcement-section">
                            <h2>最近的公告</h2>
                            <Row>
                                <Col span={2}>
                                    <Dropdown overlay={menu}>
                                        <Button>
                                            全部 <DownOutlined/>
                                        </Button>
                                    </Dropdown>
                                </Col>
                                <Col span={4}>
                                    <Search
                                        placeholder="搜索"
                                        onSearch={(value) => console.log(value)}
                                        style={{width: 200}}
                                    />
                                </Col>
                                <Col span={14}>
                                </Col>
                                <Col span={1}>
                                    <DeleteOutlined/>
                                </Col>
                                <Col span={2}>
                                    <Button type="primary" icon={<PlusOutlined/>}>
                                        公告
                                    </Button>
                                </Col>
                            </Row>
                            <Divider style={{margin: "10px 0"}}/>
                            {announcementContent}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }

}
