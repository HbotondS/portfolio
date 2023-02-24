import React from 'react';
import './Header.scss';
import { Events } from 'react-scroll';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.list_element = React.createRef();
        this.state = {
            items: [
                { text: 'Home', ref: '#home', value: 'home', selected: true},
                { text: 'About Me', ref: '#aboutme', value: 'aboutme', selected: false},
                { text: 'Projects', ref: '#projects', value: 'projects', selected: false},
                { text: 'Experience', ref: '#experience', value: 'experience', selected: false},
            ]
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.activeRef !== this.props.activeRef) {
            this.state.items.forEach(item => item.selected = item.value === this.props.activeRef);
        }
    }


    isReached(el) {
        return el.getBoundingClientRect().top <= window.innerHeight / 2;
    }

    render() {
        let themeSwitcher;
        if (this.props.theme === 'light') {
            themeSwitcher = <DarkModeIcon className={'themeicon'} onClick={this.props.switchTheme}/>;
        } else {
            themeSwitcher = <LightModeIcon className={'themeicon'} onClick={this.props.switchTheme}/>;
        }

        return (
            <div id="container">
                <nav id="navigation-container">
                    <ul id="navigation">
                        {this.state.items.map(item => (
                            <li key={item.text}
                                className={item.selected ? "selected" : "unselected"}>
                                <a href={item.ref}>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                {themeSwitcher}
            </div>
        );
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        document.removeEventListener('scroll', this.trackScrolling);
    }
}
