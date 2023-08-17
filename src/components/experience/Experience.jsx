import './Experience.scss';
import * as React from 'react';
import { ReactComponent as ReadingSvg } from '../../assets/animations/reading.svg';
import { ReactComponent as WorkSvg } from '../../assets/animations/work.svg';
import { ExperienceCard } from '../experience-card/ExperienceCard';
import { ExperienceData } from '../../models/experience-data';
import { useElementOnScreen } from '../../utils/useElementOnScreen';
import { useEffect } from 'react';

export function Experience({ onVisible }) {
  const [ containerRef, isVisible ] = useElementOnScreen();

  useEffect(() => {
    if (isVisible) {
      onVisible();
    }
  }, [ isVisible, onVisible ]);

  
  const experiences = [
    new ExperienceData(
      'Computer Science',
      {
        url: 'https://ms.sapientia.ro/en',
        displayName: 'Sapientia Hungarian Univeristy of Transilvania',
      },
      '2016-2018',
      'Targu Mures, Romania',
      'education',
      ''
    ),
    new ExperienceData(
      'Information Science, Erasmus+',
      {
        url: 'https://inf.unideb.hu/en',
        displayName: 'University of Debrecen, Faculty of Informatics',
      },
      '2018 feb - 2018 jun',
      'Debrecen, Hungary',
      'education',
      ''
    ),
    new ExperienceData(
      'Software developer intern',
      {
        url: 'https://www.msg-systems.ro/',
        displayName: 'MSG Systems',
      },
      '2018 jul - 2018 aug',
      'Targu Mures, Romania',
      'work',
      ''
    ),
    new ExperienceData(
      'Information Science, Bsc degree',
      {
        url: 'https://ms.sapientia.ro/en',
        displayName: 'Sapientia Hungarian Univeristy of Transilvania',
      },
      '2018-2020',
      'Targu Mures, Romania',
      'education',
      ''
    ),
    new ExperienceData(
      'Full Stack developer',
      {
        url: 'https://www.msg-systems.ro/',
        displayName: 'MSG Systems',
      },
      '2018 nov - Present',
      'Targu Mures, Romania',
      'work',
      'current'
    ),
  ];

  return (
    <div id='experience' className='h-fit flex flex-col bg-stone-900' ref={ containerRef }>
      <ReadingSvg className="reading-svg hidden" />
      <WorkSvg className="work-svg hidden" />
      <h1 className='mt-14 ml-16 text-white text-4xl font-semibold'>Experience</h1>
      <ol className='w-full flex flex-col-reverse items-center'>
        {experiences.map((experience) => (
          <li key={experience.title} className="border-l-2 border-[#772CE8] cursor-default">
            <ExperienceCard experience={experience} />
          </li>
        ))}
      </ol>
      <div className="w-full">
        <div className="relative flex flex-col gap-3 mt-5 justify-self-center"></div>
      </div>
    </div>
  );
}
