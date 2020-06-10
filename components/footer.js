import React from "react";
import {Grid, Cell} from 'react-mdl';

const FooterPage = () => {
  return (
    <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="footer-grid">
            <Cell col={12} className="footer-section-cell">
                <a href="https://www.linkedin.com/in/austin-rath" target="_blank"><i class="fab fa-linkedin fa-3x"></i></a>
                <a href="https://github.com/arath36" target="_blank"><i class="fab fa-github-square fa-3x"></i></a>
                <a href="https://devpost.com/arath36" target="_blank"><i class="fab fa-dev fa-3x"></i></a>
                <a href="https://www.instagram.com/austinrath_/?hl=en" target="_blank"><i class="fab fa-instagram-square fa-3x"></i></a>
            </Cell>
            <Cell col={12}>
                <p><small className="copyright">Copyright © 2020 Austin Rath, all rights reserved.</small></p>
            </Cell>
        </Grid>

    </div>
  );
}

export default FooterPage;