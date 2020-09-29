import * as React from 'react';
import './Home.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { ClickMe } from "../clickme/ClickMe";

export class Home extends React.Component {
    render() {
        return (
            <div>
              <div className={'container'}>
                <div className={'titles'}>
                  <span className={'title'}>Hello I am Botond</span>
                  <span className={'subtitle'}>Full Stack Dev | Hobby Game Dev | Gamer</span>
                  </div>
                  <div className={'links'}>
                    <a href="https://github.com/HbotondS" target={"_blank"}>
                      <GitHubIcon className={'githubicon'}/>
                    </a>
                    <a href="https://www.linkedin.com/in/hbotond/" target="_blank">
                      <LinkedInIcon className={'linkedinicon'}/>
                    </a>
                  </div>
              </div>
              <ClickMe/>
            </div>
        );
    }
}
