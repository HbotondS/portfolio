import './Projects.scss'
import * as React from "react";
import { ProjectData } from "../../models/project-data";
import {ProjectCard} from "../project-card/ProjectCard";
import space_invaders from "../../assets/images/space_invaders.jpg";
import snake from "../../assets/images/snake.jpg";
import minesweeper from "../../assets/images/minesweeper.jpg";
import no_image from "../../assets/images/no_image.jpg";
import { ReactComponent as ManPresenting } from "../../assets/animations/projects.svg";

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
                snake,
                'https://github.com/HbotondS/Snake'),
            new ProjectData(
                'Minesweeper clone',
                ['Qt', 'C++'],
                minesweeper,
                'https://github.com/HbotondS/Minesweeper'),
            new ProjectData(
                '2D Top-down shooter',
                ['C++', 'OpenGL'],
                no_image,
                'https://github.com/HbotondS/2D-Top-down-shooter'),
            new ProjectData(
                'TCP-chat-application',
                ['Java', 'C++'],
                no_image,
                'https://github.com/HbotondS/TCP-chat-application'),
            new ProjectData(
                'MovieDB',
                ['Kotlin'],
                no_image,
                'https://github.com/HbotondS/MovieDB-Android'),
        ];
    }

    render() {
        return (
            <div id={'projects'} className={'ProjectsPage'} ref={this.props.reference}>
                <span className={'title'}>Projects</span>
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
