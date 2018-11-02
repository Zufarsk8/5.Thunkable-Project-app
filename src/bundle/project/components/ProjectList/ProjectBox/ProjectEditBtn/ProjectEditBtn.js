import React, { Component } from 'react';
import { Col } from 'antd';
import ProjectContext from '../../../../ProjectContext'

class ProjectEditBtn extends Component {

    state = {
        isHovering: false,
    };

    handleMouseHover = () => {
        this.setState(state => ({ isHovering: !state.isHovering }))
    }

    hoverRender() {
        if (this.state.isHovering) {
            return (<img src={require("../../../../../../assets/EditIcon_Hover.svg")} style={{ width: '1.75em', display: 'block', marginTop: 'auto', marginLeft: 'auto', marginRight: 'auto', cursor: 'pointer', position: 'absolute', bottom: '0', right: '40%' }} alt="edit icon" />
            )
        }
        else {
            return (<img src={require("../../../../../../assets/EditIcon.svg")} style={{ width: '1.75em', display: 'block', marginTop: 'auto', marginLeft: 'auto', marginRight: 'auto', cursor: 'pointer', position: 'absolute', bottom: '0', right: '40%' }} alt="edit icon" />
            )
        }
    }

    render() {
        return (<Col lg={{ span: 2, offset: 0 }} xs={{ span: 1, }} style={{ minHeight: '2em', }} onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}  >
            <ProjectContext.Consumer >
                {context =>

                    <div onClick={() => context.setEdittingMode(this.props.projectID)}>
                        {this.hoverRender()}
                    </div>}
            </ProjectContext.Consumer>

        </Col>)

    }

}
export default ProjectEditBtn