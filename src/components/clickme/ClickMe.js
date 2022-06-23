import React from 'react';
import './ClickMe.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { scroller } from "react-scroll";

export class ClickMe extends React.Component {
    clicked() {
        scroller.scrollTo('aboutme', {
            duration: 300,
            smooth: true
        });
    }

    render() {
        return (
            <div className={'ClickMe'} onClick={() => this.clicked()}>
                <span className={'Text'}>Click Me!</span>
                <KeyboardArrowDownIcon className={'Icon'}/>
            </div>
        );
    }
}
