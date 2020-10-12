import * as React from "react";
import './ProjectCard.scss'

export class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.project = props.project;
    }

    render() {
        return (
            <div className={'ProjectCard'}>
              <div className={'image-background'}>
                <a href={this.project.link}
                   target={"_blank"}
                   rel={'noopener noreferrer'}>
                  <img className={'image'}
                       src={this.project.image}
                       alt={this.project.title} />
                </a>
              </div>
              <div>
                <span className={'title'}>{this.project.title}</span>
              </div>
              <div className={'badges'}>
                {this.project.badges.map((badge, index) => (
                  <div key={index} className={'badge'}>
                    <span className={'badge-text'}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
        )
    }
}
