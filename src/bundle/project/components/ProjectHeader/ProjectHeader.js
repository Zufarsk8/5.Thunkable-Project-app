import React, { Component } from 'react';
import AddButton from './AddButton/AddButton';


class ProjectHeader extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <img src={require('../../../../assets/ThunkableBeaver.png')} style={styles.beaverImg} alt="ThunkableBeaver" />
          <div style={{ color: '#4c4c4c', letterSpacing: '1px', fontWeight: '600', marginLeft: '1em', }}>MY PROJECTS</div>
          <AddButton />
        </div>


      </div>
    );
  }
}

const styles = {
  container: {
    marginBottom: '3em',
    borderBottom: '2px solid #f0f2f6',

  },
  innerContainer: {
    maxWidth: '1050px',
    margin: 'auto',
    padding: '1em 0',
    display: 'block',
    position: 'relative',

  },
  beaverImg: {
    width: '2.5em', marginBottom: '4em'
  }
};
export default ProjectHeader;