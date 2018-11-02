import React, { Component } from 'react';
import { Col } from 'antd';
import { Modal, } from 'antd';
import ProjectContext from '../../../../ProjectContext'

const confirm = Modal.confirm;


class ProjectDelete extends Component {

    state = {
        isHovering: false,
    };
    showConfirm = (context, projectID) => {
        confirm({
            title: 'Are you sure you want to delete this project?',
            content: 'This actions can\'t be undone.',
            onOk() {
                context.deleteProjectHandler(projectID)
            },
            onCancel() {

            },
            okText: 'Yes',
            cancelText: 'No'
        });
    }




    handleMouseHover = () => {
        this.setState(state => ({ isHovering: !state.isHovering }))
    }

    conditionalRender() {
        if (this.state.isHovering) {
            return (<img
                src={require("../../../../../../assets/DeleteIcon_Hover.svg")} style={{ cursor: 'pointer', width: '1.75em', display: 'block', marginTop: 'auto', marginLeft: 'auto', marginRight: 'auto', position: 'absolute', bottom: '0' }} alt="edit icon" />)
        }
        else {
            return (<img
                src={require("../../../../../../assets/DeleteIcon.svg")} style={{ cursor: 'pointer', width: '1.75em', display: 'block', marginTop: 'auto', marginLeft: 'auto', marginRight: 'auto', position: 'absolute', bottom: '0' }} alt="edit icon" />)
        }
    }

    render() {
        return (<Col lg={{ span: 2, offset: 5 }} xs={{ span: 1, }} style={{ minHeight: '2em', }} onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover} onClick={this.showModal}>

            <ProjectContext.Consumer>
                {context =>
                    <div onClick={() => this.showConfirm(context, this.props.projectID)}>
                        {this.conditionalRender()}
                    </div>
                }
            </ProjectContext.Consumer>


        </Col>)
    }

}
export default ProjectDelete