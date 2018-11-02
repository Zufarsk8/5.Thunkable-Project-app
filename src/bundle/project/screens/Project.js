import React, { Component } from 'react';
import ProjectContext from '../ProjectContext'
import ProjectHeader from '../components/ProjectHeader/ProjectHeader'
import ProjectInput from '../components/ProjectList/ProjectBox/ProjectInput/ProjectInput'
import ProjectList from '../components/ProjectList/ProjectList'
import ProjectBox from '../components/ProjectList/ProjectBox/ProjectBox'
import { DragDropContext } from 'react-beautiful-dnd'


import { Layout } from 'antd';
const uuidv1 = require('uuid/v1');

class Project extends Component {
  state = {
    newProjectActive: false,
    ProjectList: [],
    isEditting: false,
    edittingID: '',
    setEdittingMode: (projectID) => {
      if (projectID === this.state.edittingID && this.state.isEditting) {
        this.state.offEdittingMode()
      }
      else {
        this.setState(state => ({
          isEditting: true,
          edittingID: projectID
        }))
      }
    },
    offEdittingMode: () => {
      this.setState(state => ({
        isEditting: false,
      }))
    },
    editTitle: (projectName, projectID) => {
      this.setState(currentState => ({
        ProjectList: currentState.ProjectList.map(project => {
          if (project.projectID === projectID) {
            project = { ...project, projectName: projectName }
          }
          return project
        })
      }), this.state.offEdittingMode);
    },
    addProjectHandler: (projectName, date) => {
      this.setState(currentState => ({
        ProjectList: [{ projectName: projectName, dateAdded: date, projectID: uuidv1() }, ...currentState.ProjectList]
      }), this.state.showNewProject);
    },
    deleteProjectHandler: (projectID) => {
      this.setState(currentState => ({
        ProjectList: currentState.ProjectList.filter(project => project.projectID !== projectID)
      }))
    },
    showNewProject: () => {
      this.setState(currentState => ({
        newProjectActive: !currentState.newProjectActive
      }))
    },
    setNewOrder: (newOrder) => {
      this.setState(currentState => ({
        ProjectList: newOrder
      }), console.log(newOrder))
    }

  };

  showNewProjectBox() {
    if (this.state.newProjectActive) {
      return (<ProjectBox>
        <ProjectInput widthSize="6" />
      </ProjectBox>)
    }
  }



  onDragEnd = result => {
    const { destination, source, draggableId } = result;


    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const savedState = this.state.ProjectList
    var movingData = savedState[source.index]
    console.log(movingData)
    const newList = this.state.ProjectList;
    newList.splice(source.index, 1);
    newList.splice(destination.index, 0, draggableId);
    newList[destination.index] = movingData
    this.state.setNewOrder(newList)

  }

  render() {
    return (
      <ProjectContext.Provider value={this.state}>

        <DragDropContext onDragEnd={this.onDragEnd}>
          <Layout style={{

            background: '#f7f9fd',

          }}>
            <ProjectHeader />
            {this.showNewProjectBox()}
            <ProjectList />
          </Layout>
        </DragDropContext>

      </ProjectContext.Provider >
    );
  }
}

export default Project;