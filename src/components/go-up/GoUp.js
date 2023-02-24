import React from 'react';
import './GoUp.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export class GoUp extends React.Component {
    render() {
        return (
            <a href="#home">
                <div className={'GoUp'}>
                    <KeyboardArrowUpIcon className={'Icon'}/>
                    <span className={'Text'}>Go up!</span>
                </div>
            </a>
        );
    }
}
