import './Experience.scss'
import * as React from "react";
import { ReactComponent as ReadingSvg} from '../../assets/reading.svg';
import { ReactComponent as WorkSvg} from '../../assets/work.svg';

export class Experience extends React.Component {
    render() {
        return (
            <div id={'experience'} className={'ExperiencePage'}>
              <ReadingSvg className={'reading-svg'}/>
              <WorkSvg className={'work-svg'}/>
            </div>
        );
    }
}
