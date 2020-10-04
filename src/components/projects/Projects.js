import './Projects.scss'
import * as React from "react";
import { ProjectData } from "../../models/project-data";
import {ProjectCard} from "../project-card/ProjectCard";

export class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.projects = [
            new ProjectData('Title #1', ['React', 'SQL'], ''),
            new ProjectData('Title #2', ['Angular'], ''),
            new ProjectData('Title #3', ['Angular'], ''),
            new ProjectData('Title #4', ['Angular'], ''),
            new ProjectData('Title #5', ['Angular'], ''),
            new ProjectData('Title #6', ['Angular'], ''),
        ];
    }

    render() {
        return (
            <div id={'projects'} className={'ProjectsPage'}>
                <div className={'project-container'}>
                    {this.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        );
    }
}