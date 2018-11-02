import React, { Component } from 'react';
import { Col } from 'antd';
import './ProjectInput.css'
import { Input } from 'antd';
import ProjectContext from '../../../../ProjectContext'

class ProjectInput extends Component {


    handleChange = (e) => {
        this.setState({ ProjectName: e.target.value });
    }

    keyPress = (e, context) => {
        if (e.keyCode === 13 && this.props.isEditting) {

            context.editTitle(e.target.value, context.edittingID)
        }
        else if (e.keyCode === 13) {
            context.addProjectHandler(e.target.value, this.parseDate())
        }
    }

    monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    parseDate() {
        var currentDate = new Date();
        var date = currentDate.getDate();
        var month = currentDate.getMonth(); //Be careful! January is 0 not 1
        var year = currentDate.getFullYear();
        var hour = currentDate.getHours();
        var AMorPM = "am"
        if (hour > 12) {
            hour -= 12
            AMorPM = "pm"
        }
        var minutes = currentDate.getMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`
        }


        return (`${this.monthList[month]} ${date}, ${year}\u00A0\u00A0 ${hour}:${minutes}${AMorPM}`)
    }




    render() {
        return (
            <ProjectContext.Consumer >
                {
                    context => <Col xs={{ span: 18 }} lg={{ span: this.props.widthSize, }} style={{ margin: 'auto', fontSize: '0.9em' }}>
                        <Input placeholder="Name your project" style={{ display: 'block', margin: 'auto', fontSize: '1.25em', padding: '0.5em' }} onKeyDown={(e) => this.keyPress(e, context)} onChange={this.handleChange} defaultValue={this.props.projectName} />
                    </Col>
                }
            </ProjectContext.Consumer>
        )
    }



}

export default ProjectInput