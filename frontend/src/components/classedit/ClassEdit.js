import './ClassEdit.css';

import React from 'react';

import ClassInfo from "../classinfo/ClassInfo";

const classInfo = {
    subject: "六年级语文",
    semester: "第二学期",
    grade: "六年级",
    year: "2020",
    students: [1, 2, 3, 4, 5],
    courseId: 99,
    description: "这个老师很懒，他没有写描述。",
};


class ClassEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name:"",
          description:"",
          books: []
        };
    }

    render() {
        return (
          <div className="class-edit">
              {/* eslint-disable-next-line react/prop-types */}
              <ClassInfo classInfo={classInfo} addClass={this.props.addClass}/>
          </div>
        );
    }
}

export default ClassEdit;
