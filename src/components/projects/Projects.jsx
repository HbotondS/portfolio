import { ProjectData } from '../../models/project-data';
import { ProjectCard } from '../project-card/ProjectCard';
import space_invaders from '../../assets/images/space_invaders.jpg';
import snake from '../../assets/images/snake.jpg';
import minesweeper from '../../assets/images/minesweeper.jpg';
import no_image from '../../assets/images/no_image.jpg';
import { ReactComponent as ManPresenting } from '../../assets/animations/projects.svg';
import { useElementOnScreen } from '../../utils/useElementOnScreen';
import { useEffect } from 'react';

export function Projects({ onVisible }) {
  const [ containerRef, isVisible ] = useElementOnScreen();

  useEffect(() => {
    if (isVisible) {
      onVisible();
    }
  }, [ isVisible, onVisible ]);

  const projects = [
    new ProjectData(
      'Space Invaders clone',
      ['Java', 'JavaFx'],
      space_invaders,
      'https://github.com/HbotondS/Space-Invaders'
    ),
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
      'https://github.com/HbotondS/2D-Top-down-shooter'
    ),
    new ProjectData(
      'TCP-chat-application',
      ['Java', 'C++'],
      no_image,
      'https://github.com/HbotondS/TCP-chat-application'
    ),
    new ProjectData(
      'MovieDB', 
      ['Kotlin'], 
      no_image, 
      'https://github.com/HbotondS/MovieDB-Android'),
  ];

  return (
    <div id={'projects'} className="h-fit md:h-screen flex items-center bg-neutral-900" ref={ containerRef }>
      <div className="flex flex-col ml-16">
        <span className="text-white text-4xl font-semibold mb-8">Projects</span>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
      <ManPresenting className='absolute md:-right-48 lg:right-0 w-fit hidden xl:block h-[30rem]' />
    </div>
  );
}
