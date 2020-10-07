import './Experience.scss'
import * as React from "react";
import { ReactComponent as ReadingSvg} from '../../assets/reading.svg';
import { ReactComponent as WorkSvg} from '../../assets/work.svg';
import { ExperienceCard } from "../experience-card/ExperienceCard";

export class Experience extends React.Component {
    render() {
        return (
            <div id={'experience'} className={'ExperiencePage'}>
              <ReadingSvg className={'reading-svg'}/>
              <WorkSvg className={'work-svg'}/>
              <div className={'experience-container'}>
                <h2 className={'title left'}>Education</h2>
                <h2 className={'title right'}>Work Experience</h2>
              </div>
            </div>
        );
    }
}
