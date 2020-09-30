import React from 'react';
import './GoUp.scss'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { scroller } from "react-scroll";

export class GoUp extends React.Component {
    clicked() {
        scroller.scrollTo('home', {
            duration: 300,
            smooth: true
        });
    }

    render() {
        return (
            <div className={'GoUp'} onClick={() => this.clicked()}>
                <KeyboardArrowUpIcon className={'Icon'}/>
                <span className={'Text'}>Go up!</span>
            </div>
        );
    }
}
