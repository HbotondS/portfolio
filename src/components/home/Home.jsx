import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { ClickMe } from '../clickme/ClickMe';

export function Home(props) {
  return (
    <div id={'home'} className="h-screen bg-neutral-900 flex flex-col items-center justify-center" ref={props.reference}>
      <div className='flex flex-col items-center'>
        <span className='text-white text-4xl'>Hello I am Botond</span>
        <span className='text-white text-base mt-2'>Full Stack Dev | Hobby Game Dev | Gamer</span>

        <div className='flex justify-center text-white mt-4'>
          <a href="https://github.com/HbotondS" target={'_blank'} rel={'noopener noreferrer'}>
            <GitHubIcon className='!text-5xl mr-2' />
          </a>
          <a href={'mailto:hbotond97@gmail.com'}>
            <EmailIcon className='!text-5xl mr-1' />
          </a>
          <a href="https://www.linkedin.com/in/hbotond/" target="_blank" rel={'noopener noreferrer'}>
            <LinkedInIcon className='!text-5xl' />
          </a>
        </div>
      </div>
      <ClickMe />
    </div>
  );
}
