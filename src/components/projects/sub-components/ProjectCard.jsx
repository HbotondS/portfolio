import * as React from 'react';

export function ProjectCard(props) {
  return (
    <div className='w-fit'>
      <div className='h-28 w-48 mb-1 bg-[#772CE8]'>
        <a href={props.project.link} target={'_blank'} rel={'noopener noreferrer'}>
          <img className='h-full w-full duration-200 hover:translate-x-1 hover:-translate-y-1' src={props.project.image} alt={props.project.title} />
        </a>
      </div>
      <div>
        <span className='mb-1 font-bold text-base text-white'>{props.project.title}</span>
      </div>
      <div className='w-full flex flex-wrap'>
        {props.project.badges.map((badge, index) => (
          <div key={index} className='mr-1 rounded-full text-xs bg-[#6B6B6B]'>
            <span className='mx-2 text-white'>{badge}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
