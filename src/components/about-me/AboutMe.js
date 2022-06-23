import './AboutMe.scss'
import * as React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import { ReactComponent as ManSvg } from '../../assets/animations/thinking_man.svg';
import cv from '../../assets/docs/Botond Hegyi CV.pdf';

export class AboutMe extends React.Component {
    render() {
        return (
            <div id={'aboutme'} className={'AboutMePage'}>
              <div className={'container'}>
                <span className={'title'}>About Me</span>

                  <p className={'text'}>During university I started working in part time for MSG Systems Romania in Tirgu Mures.
                    After graduating in 2020 with a Bachelor’s Degree in Information Science, I started working in full-time as part of a team.
                    I acquired project and time management skills, as well as the ability to communicate with team members and clients while effectively meeting milestones and deadlines.
                </p>
                <div className={'button'}>
                  <a href={cv} download={'Botond_Hegyi_CV.pdf'}>
                    <span className={'button-text'}>DOWNLOAD RESUME</span>
                    <DownloadIcon className={'download-icon'}/>
                  </a>
                </div>
              </div>
              <ManSvg className={'man-svg'}/>
            </div>
        );
    }
}
