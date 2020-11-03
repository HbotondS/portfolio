import React from 'react';
import './Footer.scss';
import FavoriteIcon from '@material-ui/icons/Favorite';

export class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
              <span className={'footerTxt'}>
                Currently <a className={'versionNr'} href={''}>v0.1</a>.
                Built with <FavoriteIcon className={'icon'}/> Copyright © 2020 Botond Hegyi
              </span>
            </div>
        );
    }
}
