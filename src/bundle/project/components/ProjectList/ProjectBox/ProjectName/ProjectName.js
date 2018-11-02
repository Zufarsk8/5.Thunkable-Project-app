import React, { Component } from 'react'
import { Col } from 'antd';
import ProjectContext from '../../../../ProjectContext'

class ProjectName extends Component {

    render() {
        return (
            <Col xs={{ span: 18, }} lg={{ span: 4, offset: 0 }} style={{ margin: 'auto', minHeight: '2em', display: 'flex' }}>
                <ProjectContext.Consumer>
                    {context =>
                        <div style={{ display: 'block', fontSize: '1.35em', fontWeight: '600', overflowWrap: 'break-word' }}>{this.props.projectName}</div>}
                </ProjectContext.Consumer>
            </Col>)
    }
}

export default ProjectName