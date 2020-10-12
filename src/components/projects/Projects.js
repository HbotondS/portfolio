import './Projects.scss'
import * as React from "react";
import { ProjectData } from "../../models/project-data";
import {ProjectCard} from "../project-card/ProjectCard";
import space_invaders from "../../images/space_invaders.jpg";
import snake from "../../images/snake.jpg";
import { ReactComponent as ManPresenting } from "../../assets/projects.svg";

export class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.projects = [
            new ProjectData(
                'Space Invaders clone',
                ['Java', 'JavaFx'],
                space_invaders,
                'https://github.com/HbotondS/Space-Invaders'),
            new ProjectData(
                'Snake clone',
                ['Java', 'JavaFx'],
                '',
                'https://github.com/HbotondS/Snake'),
            new ProjectData(
                'Minesweeper clone',
                ['Qt', 'C++'],
                snake,
                'https://github.com/HbotondS/Minesweeper'),
            new ProjectData(
                '2D Top-down shooter',
                ['C++', 'OpenGL'],
                '',
                'https://github.com/HbotondS/2D-Top-down-shooter'),
            new ProjectData(
                'TCP-chat-application',
                ['Java', 'C++'],
                '',
                'https://github.com/HbotondS/TCP-chat-application'),
            new ProjectData(
                'MovieDB',
                ['Kotlin'],
                '',
                'https://github.com/HbotondS/MovieDB-Android'),
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
                <ManPresenting className={'presenting-svg'}/>
            </div>
        );
    }
}
