import './GoUp.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export function GoUp() {
  return (
    <a href="#home" className='fixed right-2 bottom-6 hover:bottom-8'>
      <div className='fade-in flex flex-col items-center'>
        <KeyboardArrowUpIcon className='text-white !text-6xl' />
        <span className='text-white text-sm relative -top-4'>Go up!</span>
      </div>
    </a>
  );
}
