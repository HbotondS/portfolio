import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    bg: '#f3f3f3',
    bg_light: '#f8f8f8',
    header: '#333333',
    primary: '#772ce8',
    title: '#333333',
    text: '#333333',
}

export const darkTheme = {
    bg: '#121212',
    bg_light: '#161515',
    header: '#333333',
    primary: '#772CE8',
    title: 'white',
    text: 'white',
}

export const GlobalStyles = createGlobalStyle`    
    #container {
        background: ${(props => props.theme.header)};
    }
    
    .ClickMe {
        color: ${(props => props.theme.text)};
    }
    
    .GoUp {
        color: ${(props => props.theme.text)};
    }
`;