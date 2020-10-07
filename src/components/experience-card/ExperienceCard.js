import './ExperienceCard.scss';
import * as React from "react";

export class ExperienceCard extends React.Component {
    constructor(props) {
        super(props);
        this.experience = props.experience;
    }

    render() {
        return (
          <div className={'ExperienceCard'}>
            <h3 className={'experience-title'}>{this.experience.title}</h3>
            <a target={'_blank'}
               rel={'noopener noreferrer'}
               href={this.experience.link.url}
               className={'experience-link'}>
                {this.experience.link.displayName}
            </a>
            <span className={'experience-date'}>{this.experience.date}</span>
            <span className={'experience-location'}>{this.experience.location}</span>
            <div className={this.experience.status +
                            ' circle ' +
                            this.experience.type}>
            </div>
          </div>
        );
    }

}
