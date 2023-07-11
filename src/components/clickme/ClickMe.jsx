import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export function ClickMe() {
  return (
    <a href="#aboutme" className='absolute bottom-0'>
      <div className='animate-bounce flex flex-col items-center' onClick={() => this.clicked()}>
        <span className='text-white'>Click Me!</span>
        <KeyboardArrowDownIcon className='text-white' />
      </div>
    </a>
  );
}
