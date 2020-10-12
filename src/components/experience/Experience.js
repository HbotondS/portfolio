import './Experience.scss'
import * as React from "react";
import { ReactComponent as ReadingSvg} from '../../assets/reading.svg';
import { ReactComponent as WorkSvg} from '../../assets/work.svg';
import { ExperienceCard } from "../experience-card/ExperienceCard";
import {ExperienceData} from "../../models/experience-data";

export class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.experiences = [
            new ExperienceData(
                'Computer Science',
                {
                    url: 'https://ms.sapientia.ro/en',
                    displayName: 'Sapientia Hungarian Univeristy of Transilvania'
                },
                '2016-2018',
                'Targu Mures, Romania',
                'education',
                '',
                ),
            new ExperienceData(
                'Information Science, Erasmus+',
                {
                    url: 'https://inf.unideb.hu/en',
                    displayName: 'University of Debrecen, Faculty of Informatics'
                },
                '2018 feb - 2018 jun',
                'Debrecen, Hungary',
                'education',
                '',
            ),
            new ExperienceData(
                'Software developer intern',
                {
                    url: 'https://www.msg-systems.ro/',
                    displayName: 'MSG Systems'
                },
                '2018 jul - 2018 aug',
                'Targu Mures, Romania',
                'work',
                '',
            ),
            new ExperienceData(
                'Information Science, Bsc degree',
                {
                    url: 'https://ms.sapientia.ro/en',
                    displayName: 'Sapientia Hungarian Univeristy of Transilvania'
                },
                '2018-2020',
                'Targu Mures, Romania',
                'education',
                '',
            ),
            new ExperienceData(
                'Full Stack developer',
                {
                    url: 'https://www.msg-systems.ro/',
                    displayName: 'MSG Systems'
                },
                '2018 nov - Present',
                'Targu Mures, Romania',
                'work',
                'current',
            ),
        ];
    }

    render() {
        return (
            <div id={'experience'} className={'ExperiencePage'}>
              <ReadingSvg className={'reading-svg'}/>
              <WorkSvg className={'work-svg'}/>
              <div className={'experience-container'}>
                <div className={'title-container'}>
                  <h2 className={'title left'}>Education</h2>
                  <h2 className={'title right'}>Work Experience</h2>
                </div>
                {this.experiences.reverse().map((experience, index) => (
                  <div key={index} className={'card-container'}>
                    <ExperienceCard experience={experience}/>
                  </div>
                ))}
              </div>
            </div>
        );
    }
}
