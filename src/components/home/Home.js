import * as React from 'react';
import './Home.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import { ClickMe } from "../clickme/ClickMe";

export class Home extends React.Component {
    render() {
        return (
            <div id={'home'} className={'HomePage'}>
              <div className={'container'}>
                <div className={'titles'}>
                  <span className={'title'}>Hello I am Botond</span>
                  <span className={'subtitle'}>Full Stack Dev | Hobby Game Dev | Gamer</span>

                  <div className={'links'}>
                    <a href="https://github.com/HbotondS"
                       target={"_blank"}
                       rel={'noopener noreferrer'}>
                      <GitHubIcon className={'githubicon'}/>
                    </a>
                    <a href={"mailto:hbotond97@gmail.com"}>
                      <MailIcon className={'mailicon'}/>
                    </a>
                    <a href="https://www.linkedin.com/in/hbotond/"
                       target="_blank"
                       rel={'noopener noreferrer'}>
                      <LinkedInIcon className={'linkedinicon'}/>
                    </a>
                  </div>
                </div>
              </div>
              <ClickMe/>
            </div>
        );
    }
}
