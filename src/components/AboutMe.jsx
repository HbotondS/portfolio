import cv from '../assets/docs/Botond Hegyi CV.pdf';
import DownloadIcon from '@mui/icons-material/Download';
import { ReactComponent as ManSvg } from '../assets/animations/thinking_man.svg';
import { useElementOnScreen } from '../utils/useElementOnScreen';
import { useEffect } from 'react';

export function AboutMe({ onVisible }) {
  const [ containerRef, isVisible ] = useElementOnScreen();

  useEffect(() => {
    if (isVisible) {
      onVisible();
    }
  }, [ isVisible, onVisible ]);

  return (
    <div id='aboutme' className='h-screen flex items-center justify-center bg-[#121212]' ref={ containerRef }>
      <div className='flex flex-col md:w-7/12'>
        <span className='text-center md:text-right font-bold text-6xl text-white'>About Me</span>

        <p className='text-justify text-white font-medium mx-6 md:mx-0 mt-8'>
          During university I started working in part time for MSG Systems Romania in Tirgu Mures. After graduating in
          2020 with a Bachelor’s Degree in Information Science, I started working in full-time as part of a team. I
          acquired project and time management skills, as well as the ability to communicate with team members and
          clients while effectively meeting milestones and deadlines.
        </p>
        <div className='text-white outline outline-offset-4 rounded-md w-fit mt-8 mx-auto md:ml-1'>
          <a href={cv} download={'Botond_Hegyi_CV.pdf'}>
            <span>DOWNLOAD RESUME</span>
            <DownloadIcon />
          </a>
        </div>
      </div>
      <ManSvg className='absolute mt-48 left-0 h-96 w-fit hidden md:block'/>
    </div>
  );
}
