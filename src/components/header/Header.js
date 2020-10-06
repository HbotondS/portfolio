import React from 'react';
import './Header.scss';
import { Events, scroller } from 'react-scroll'

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.list_element = React.createRef();
        this.state = {
            items: [
                { text: 'Home', value: 'home', selected: true},
                { text: 'About Me', value: 'aboutme', selected: false},
                { text: 'Projects', value: 'projects', selected: false},
                { text: 'Experience', value: 'experience', selected: false},
            ]
        };

        Events.scrollEvent.register('begin', (to, element) => {
            this.updateStateWhenScroll(to);
        })
        document.addEventListener('scroll', this.trackScrolling);
    }

    isReached(el) {
        return el.getBoundingClientRect().top <= window.innerHeight / 2;
    }

    trackScrolling = () => {
        const homeComp = document.getElementById('home');
        const aboutMeComp = document.getElementById('aboutme');
        const projectsComp = document.getElementById('projects');
        const educationComp = document.getElementById('experience');
        if (this.isReached(homeComp)) {
            this.updateStateWhenScroll('home');
        }
        if (this.isReached(aboutMeComp)) {
            this.updateStateWhenScroll('aboutme');
        }
        if (this.isReached(projectsComp)) {
            this.updateStateWhenScroll('projects');
        }
        if (this.isReached(educationComp)) {
            this.updateStateWhenScroll('experience');
        }
    };


    scrollTo(value) {
        scroller.scrollTo(value, {
            duration: 300,
            smooth: true
        });
        this.updateStateWhenScroll(value);
    }

    updateStateWhenScroll(value) {
        let items = this.state.items;
        items.forEach((item, i) => {
            item.selected = item.value === value;
        });
        this.setState({items: items});
    }

    render() {
        return (
            <div id="container">
                <nav id="navigation-container">
                    <ul id="navigation">
                        {this.state.items.map(item => (
                            <li key={item.text}
                                onClick={() => this.scrollTo(item.value)}
                                className={item.selected ? "selected" : "unselected"}>
                                {item.text}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        );
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        document.removeEventListener('scroll', this.trackScrolling);
    }
}
