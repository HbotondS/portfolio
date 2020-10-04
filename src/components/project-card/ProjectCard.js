import * as React from "react";
import './ProjectCard.scss'

export class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.project = props.project;
        console.log(this.project)
    }
    render() {
        return (
            <div className={'ProjectCard'}>
              <div className={'image-background'}>
                  <img className={'image'} src={this.project.image} />
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
