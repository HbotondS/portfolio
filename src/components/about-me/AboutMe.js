import './AboutMe.scss'
import * as React from "react";
import GetAppIcon from '@material-ui/icons/GetApp';
import { ReactComponent as ManSvg} from '../../assets/thinking_man.svg';

export class AboutMe extends React.Component {
    render() {
        return (
            <div id={'aboutme'} className={'AboutMePage'}>
              <div className={'container'}>
                <span className={'title'}>About Me</span>

                <p className={'text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className={'button'}>
                  <span className={'button-text'}>DOWNLOAD RESUME</span>
                  <GetAppIcon className={'download-icon'}/>
                </div>
              </div>
              <ManSvg className={'man-svg'}/>
            </div>
        );
    }
}
