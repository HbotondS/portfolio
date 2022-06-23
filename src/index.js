import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import './index.scss';
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { AboutMe } from "./components/about-me/AboutMe";
import { Projects } from "./components/projects/Projects";
import { Experience } from "./components/experience/Experience";
import { GoUp } from "./components/go-up/GoUp";
import { Footer } from "./components/footer/Footer";
import { lightTheme, darkTheme, GlobalStyles } from "./theme/themes";

const StyledApp = styled.div``;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldShow: false,
            theme: 'dark'
        };
        this.trackScrolling = this.trackScrolling.bind(this);
        document.addEventListener('scroll', this.trackScrolling);
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
            <ThemeProvider theme={ this.state.theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles />
                <StyledApp>
                    <Header theme={this.state.theme} switchTheme={switchTheme}/>
                    <Home/>
                    <AboutMe/>
                    <Projects/>
                    <Experience/>
                    <Footer/>
                    <div>
                        {shouldShow && <GoUp/>}
                    </div>
                </StyledApp>
            </ThemeProvider>
        );
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
