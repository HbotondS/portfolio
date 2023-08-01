import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { AboutMe } from "./components/about-me/AboutMe";
import { Projects } from "./components/projects/Projects";
import { Experience } from "./components/experience/Experience";
import { GoUp } from "./components/go-up/GoUp";
import { Footer } from "./components/footer/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldShow: false,
            theme: 'dark',
            activeRef: ''
        };
        this.trackScrolling = this.trackScrolling.bind(this);
        document.addEventListener('scroll', this.trackScrolling);

        this.homeRef = React.createRef();
        this.aboutMeRef = React.createRef();
        this.projectsRef = React.createRef();
        this.experienceRef = React.createRef();
    }

    componentDidMount() {
        this.observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.setState({ activeRef: entry.target.id })
                    }
                });
            },
            { threshold: 0.5 }
        );

        this.observer.observe(this.homeRef.current);
        this.observer.observe(this.aboutMeRef.current);
        this.observer.observe(this.projectsRef.current);
        this.observer.observe(this.experienceRef.current);
    }

    trackScrolling() {
        const homeComp = document.getElementById('aboutme');
        if (homeComp.getBoundingClientRect().top <= window.innerHeight / 2) {
            this.setState({shouldShow: true});
        } else {
            this.setState({shouldShow: false});
        }
    }

    render() {
        const switchTheme = () => {
            this.state.theme === 'light' ? this.setState({theme: 'dark'}) : this.setState({theme: 'light'});
        }

        const {shouldShow} = this.state;
        return (
            <>
                <Header theme={this.state.theme} switchTheme={switchTheme} activeRef={this.state.activeRef}/>
                <Home reference={this.homeRef}/>
                <AboutMe reference={this.aboutMeRef}/>
                <Projects reference={this.projectsRef}/>
                <Experience reference={this.experienceRef}/>
                <Footer/>
                <div>
                    {shouldShow && <GoUp/>}
                </div>
            </>
        );
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
        this.observer.disconnect();
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
