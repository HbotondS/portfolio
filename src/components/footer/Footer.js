import React from 'react';
import './Footer.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';

export class Footer extends React.Component {
    render() {
        return (
            <div id="footer" className={'Footer'}>
              <span className={'footerTxt'}>
                Currently <a className={'versionNr'}
                             href={'https://github.com/HbotondS/portfolio/releases/tag/v0.1'}
                             target={"_blank"}
                             rel={'noopener noreferrer'}>v0.2-test</a>.
                Built with <FavoriteIcon className={'icon'}/> Copyright © 2022 Botond Hegyi
              </span>
            </div>
        );
    }
}
