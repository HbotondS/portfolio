import React from 'react';
import './Header.scss';
import { scroller } from 'react-scroll'

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.list_element = React.createRef();
        this.state = {
            items: [
                { text: 'Home', value: 'home', selected: true},
                { text: 'About Me', value: 'aboutme', selected: false},
                { text: 'Projects', value: 'projects', selected: false},
                { text: 'Education', value: 'education', selected: false},
                { text: 'Work', value: 'work', selected: false},
            ]
        };
    }

    scrollTo(value) {
        let items = this.state.items;
        scroller.scrollTo(value, {
            duration: 300,
            smooth: true
        });
        items.forEach((item, i) => {
            console.log(item.value === value);
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
}
