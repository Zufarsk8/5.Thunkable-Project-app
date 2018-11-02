import React, { Component } from 'react';
import { Col } from 'antd';

class ProjectDate extends Component {




    render() {
        return (<Col xs={{ span: 20, pull: 2 }} lg={{ span: 4, offset: 5 }} style={{ minHeight: '2em', display: 'flex' }}>
            <div style={{ display: 'block', margin: 'auto', fontWeight: '400', fontSize: '0.90em', color: '#9f9f9f', overflowWrap: 'break-word' }}>{this.props.dateAdded}</div>
        </Col>)

    }

}
export default ProjectDate