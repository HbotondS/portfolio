import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    bg: '#f3f3f3',
    bg_light: '#f8f8f8',
    header: '#333333',
    primary: '#772ce8',
    card_bg: '#EFEEFF',
    title: '#333333',
    text: '#333333',
    experience_title: '#4E44DC',
    experience_link: '#333333',
    experience_date: '#4E44DC',
    experience_location: 'rgba(78, 68, 220, 0.75)'
}

export const darkTheme = {
    bg: '#121212',
    bg_light: '#161515',
    header: '#333333',
    primary: '#772CE8',
    card_bg: '#333333',
    title: 'white',
    text: 'white',
    experience_title: 'white',
    experience_link: '#4E44DC',
    experience_date: 'white',
    experience_location: 'rgba(255, 255, 255, 0.75)'
}

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${(props => props.theme.bg)};
    }
    
    #container {
        background: ${(props => props.theme.header)};
    }
    
    .ExperiencePage {
        background: ${(props => props.theme.bg_light)};
        
        .experience-container > .title-container > .title {
            color: ${(props => props.theme.title)};
        }
    }
    
    .ExperienceCard {
        background: ${(props => props.theme.card_bg)};
        
        .line {
            border-left-color: ${(props => props.theme.primary)};
        }
        
        .experience-title {
            color: ${(props => props.theme.experience_title)};
        }
        
        .experience-link {
            color: ${(props => props.theme.experience_link)};
        }
        
        .experience-date {
            color: ${(props => props.theme.experience_date)};
        }
        
        .experience-location {
            color: ${(props => props.theme.experience_location)};
        }
        
        .circle {
            border-color: ${(props => props.theme.primary)};
            
            &.current {
                background: ${(props => props.theme.primary)};
            }
        }
    }
    
    .ClickMe {
        color: ${(props => props.theme.text)};
    }
    
    .GoUp {
        color: ${(props => props.theme.text)};
    }
    
    .Footer {
        background: ${(props => props.theme.bg)};
        color: ${(props => props.theme.text)};
        
        .footerTxt > .versionNr {
            color: ${(props => props.theme.text)};
        }
    }
`;