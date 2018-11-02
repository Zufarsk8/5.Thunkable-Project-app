import React, { Component } from 'react';
import { Row, Col } from 'antd';

class ProjectBox extends Component {

    render() {
        return (
            <div style={styles.divStyle}>
                <Row align='middle' style={styles.rowStyle}>
                    <Col xs={{ span: 3, }} lg={{ span: 2, offset: 0 }} style={{}}>
                        <img src={require("../../../../../assets/beaver_project.png")} style={styles.imgStyle} alt="beaver" />
                    </Col>

                    {this.props.children}
                </Row>


            </div >)
    }

}

const styles = {
    rowStyle: {
        padding: '1.5em 0',
        background: '#fdfdfd',
        borderTop: '2px solid #e7e9ed',
        margin: '0 1em',
    },
    divStyle: {
        width: "100%",
        maxWidth: '1050px',
        margin: 'auto'
    },
    imgStyle: { width: '2em', height: '2em', display: 'block', margin: 'auto' }
}

export default ProjectBox