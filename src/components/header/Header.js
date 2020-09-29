import React from 'react';
import './Header.scss';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.list_element = React.createRef();
        this.state = {
            items: [
                { text: 'Home', selected: false},
                { text: 'Projects', selected: false},
                { text: 'Education', selected: false},
                { text: 'Work', selected: false},
            ]
        };
    }

    itemSelected(item, index) {
        let items = this.state.items;
        items.forEach((item, i) => {
            item.selected = i === index;
        });
        this.setState({items: items});
    }

    render() {
        return (
            <div id="container">
                <nav id="navigation-container">
                    <ul id="navigation">
                        {this.state.items.map((item, index) => (
                            <li key={item.text}
                                onClick={() => this.itemSelected(item, index)}
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
