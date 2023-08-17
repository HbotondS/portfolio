import React, { useRef } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useEffect, useState } from 'react';

export function Header({ theme, switchTheme, activeRef }) {
    const [ items, setItems ] = useState([
      { text: 'Home', ref: '#home', value: 'home', selected: true},
      { text: 'About Me', ref: '#aboutme', value: 'aboutme', selected: false},
      { text: 'Projects', ref: '#projects', value: 'projects', selected: false},
      { text: 'Experience', ref: '#experience', value: 'experience', selected: false},
    ]);
    const ref = useRef(activeRef);

    useEffect(() => {
      if (ref.current !== activeRef) {
        const newItems = items.map(item => {
          item.selected = item.value === activeRef;
          return { ...item, selected: item.value === activeRef };
        });
        setItems(newItems);
        ref.current = activeRef;
      }
    }, [ activeRef, items ]);
 
    let themeSwitcher;
    if (theme === 'light') {
        themeSwitcher = <DarkModeIcon className={'themeicon'} onClick={switchTheme}/>;
    } else {
        themeSwitcher = <LightModeIcon className={'themeicon'} onClick={switchTheme}/>;
    }

    return (
      <div className='flex w-full h-10 bg-[#333333] fixed top-0 z-50'>
        <nav className='flex ml-8'>
          <ul className='flex items-center'>
            {items.map(item => (
              <li key={item.text}
                className={'mr-5 text-white after:block after:h-[0.1rem] after:m-auto after:bg-white after:transition-[width] after:ease-in-out after:duration-[0.2s] ' + (item.selected ? 'after:w-full' : 'after:w-0 hover:after:w-[40%]')}>
                <a href={item.ref}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
        {/* {themeSwitcher} */}
      </div>
    );
}
