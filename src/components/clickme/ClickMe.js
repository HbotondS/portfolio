import React from 'react';
import './ClickMe.scss'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export class ClickMe extends React.Component {
    render() {
        return (
            <div className={'ClickMe'}>
                <span className={'Text'}>Click Me!</span>
                <KeyboardArrowDownIcon className={'Icon'}/>
            </div>
        );
    }
}
