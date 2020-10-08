import './Experience.scss'
import * as React from "react";
import { ReactComponent as ReadingSvg} from '../../assets/reading.svg';
import { ReactComponent as WorkSvg} from '../../assets/work.svg';
import { ExperienceCard } from "../experience-card/ExperienceCard";

export class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.experiences = [
            {
                title: 'Computer Science',
                link: {
                    url: 'https://ms.sapientia.ro/en',
                    displayName: 'Sapientia Hungarian Univeristy of Transilvania'
                },
                date: '2016-2018',
                location: 'Targu Mures, Romania',
                status: 'education',
                type: '',
            },
            {
                title: 'Information Science, Erasmus+',
                link: {
                    url: 'https://inf.unideb.hu/en',
                    displayName: 'University of Debrecen, Faculty of Informatics'
                },
                date: '2018 feb - 2018 jun',
                location: 'Debrecen, Hungary',
                status: 'education',
                type: '',
            },
            {
                title: 'Software developer intern',
                link: {
                    url: 'https://www.msg-systems.ro/',
                    displayName: 'MSG Systems'
                },
                date: '2018 jul - 2018 aug',
                location: 'Targu Mures, Romania',
                status: 'work',
                type: '',
            },
            {
                title: 'Information Science, Bsc degree',
                link: {
                    url: 'https://ms.sapientia.ro/en',
                    displayName: 'Sapientia Hungarian Univeristy of Transilvania'
                },
                date: '2018-2020',
                location: 'Targu Mures, Romania',
                status: 'education',
                type: '',
            },
            {
                title: 'Full Stack developer',
                link: {
                    url: 'https://www.msg-systems.ro/',
                    displayName: 'MSG Systems'
                },
                date: '2018 nov - Present',
                location: 'Targu Mures, Romania',
                status: 'work',
                type: 'current',
            },
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
