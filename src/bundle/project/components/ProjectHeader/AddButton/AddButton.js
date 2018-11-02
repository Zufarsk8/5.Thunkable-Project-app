import React, {
    Component
} from 'react';
import ProjectContext from '../../../ProjectContext'

import { Button } from 'antd'
import './AddButton.css'
class AddButton extends Component {
    render() {
        return (
            <ProjectContext.Consumer>
                {context =>
                    <Button onClick={context.showNewProject} className="button" type="normal" shape="circle" icon="plus" />}
            </ProjectContext.Consumer>

        );

    }
}


export default AddButton;