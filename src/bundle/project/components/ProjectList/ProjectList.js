import React, { Component } from 'react';
import ProjectBox from './ProjectBox/ProjectBox'
import ProjectContext from '../../../project/ProjectContext'
import ProjectName from '../../components/ProjectList/ProjectBox/ProjectName/ProjectName'
import ProjectDate from './ProjectBox/ProjectDate/ProjectDate'
import ProjectDelete from '../../components/ProjectList/ProjectBox/ProjectDelete/ProjectDelete'
import ProjectEditBtn from '../../components/ProjectList/ProjectBox/ProjectEditBtn/ProjectEditBtn'
import ProjectInput from '../../components/ProjectList/ProjectBox/ProjectInput/ProjectInput'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { Row } from 'antd'
const ListContainer = styled.div`
padding:0px`;
const Container = styled.div`
box-shadow: ${props => (props.isDragging ? "1px 12px 34px -15px rgba(0, 0, 0, 0.75);" : "none")}`;

class ProjectList extends Component {


    edittingModeRender(context, eachProject) {
        if (context.edittingID === eachProject.projectID && context.isEditting) {
            return (<ProjectInput isEditting={true} projectName={eachProject.projectName} widthSize="4" />)
        }
        else {
            return (
                <ProjectName projectName={eachProject.projectName} />
            )

        }
    }



    renderList(context) {
        if (window.innerWidth > 600) {
            console.log(window.innerWidth)
            return (
                <Droppable droppableId="MyID">
                    {(provided) =>
                        <ListContainer
                            innerRef={provided.innerRef}
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            {context.ProjectList.map((eachProject, index) =>
                                <Draggable draggableId={eachProject.projectID} index={index}>
                                    {(provided, snapshot) => (
                                        <Container key={eachProject.projectID}
                                            innerRef={provided.innerRef}
                                            ref={provided.innerRef}
                                            isDragging={snapshot.isDragging}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}>
                                            <ProjectBox project={eachProject} >
                                                {this.edittingModeRender(context, eachProject)}
                                                <ProjectEditBtn projectID={eachProject.projectID} />
                                                <ProjectDate dateAdded={eachProject.dateAdded} />
                                                <ProjectDelete projectID={eachProject.projectID} />
                                            </ProjectBox>
                                        </Container>
                                    )}
                                </Draggable>
                            )}
                            {provided.placeholder}
                        </ListContainer>
                    }
                </Droppable>)
        }
        else {
            return (
                <Droppable droppableId="MyID">
                    {(provided) =>
                        <ListContainer
                            innerRef={provided.innerRef}
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            {context.ProjectList.map((eachProject, index) =>
                                <Draggable draggableId={eachProject.projectID} index={index}>
                                    {(provided, snapshot) => (
                                        <Container key={eachProject.projectID}
                                            innerRef={provided.innerRef}
                                            ref={provided.innerRef}
                                            isDragging={snapshot.isDragging}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}>
                                            <ProjectBox project={eachProject} >
                                                {this.edittingModeRender(context, eachProject)}
                                                <ProjectDate dateAdded={eachProject.dateAdded} />
                                                <Row>
                                                    <ProjectEditBtn projectID={eachProject.projectID} />
                                                    <ProjectDelete projectID={eachProject.projectID} />
                                                </Row>
                                            </ProjectBox>
                                        </Container>
                                    )}
                                </Draggable>
                            )}
                            {provided.placeholder}
                        </ListContainer>
                    }
                </Droppable>)
        }
    }

    renderBottomBar(context) {
        if (context.ProjectList.length > 0 || context.newProjectActive) {
            return (
                <div style={{ borderBottom: '2px solid #e7e9ed', margin: '0 1em', }}></div>
            )
        }
    }


    render() {
        return (
            <ProjectContext.Consumer>
                {context =>
                    (<div style={{
                        width: "100%",
                        maxWidth: '1050px',
                        margin: 'auto',
                    }}>

                        {this.renderList(context)}
                        {this.renderBottomBar(context)}
                    </div >
                    )}
            </ProjectContext.Consumer>)


    }
}
export default ProjectList