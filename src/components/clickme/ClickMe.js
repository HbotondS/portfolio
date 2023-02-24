import React from 'react';
import './ClickMe.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export class ClickMe extends React.Component {
    render() {
        return (
            <a href="#aboutme">
                <div className={'ClickMe'} onClick={() => this.clicked()}>
                    <span className={'Text'}>Click Me!</span>
                    <KeyboardArrowDownIcon className={'Icon'}/>
                </div>
            </a>
        );
    }
}
