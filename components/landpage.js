import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';


class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12} className="landing-grid-cell1">
                    <h2 className="welcome-text">Hey there, my name is Austin!</h2>
                    <img
                        src="bitmojiHeadshotCropped.jpg"
                        alt="bitmoji headshot"
                        className="header-image"
                    />
                    <p className="landing-description">
                        I'm a third year Computer Engineering student at the University of Texas at Austin.
                        I have industry experience as a software engineering intern at Foreflight, a Boeing Company, and am actively 
                        searching for a Co-op/Intern position for the spring/summer 2021 session. 
                        Tech & development has been a passion of mine since high school. 
                        I've even won multiple hackathons and developed a featured project
                        in the <a href="https://covidglobalhackathon.com/" target="_blank">#BuildForCovid19</a> hackathon, which showcased over 18,000 participants from 175 different countries. 
                        Check out my featured project, <a href="https://devpost.com/software/sinkmate" target="_blank">Sinkmate</a>. In addition, I am an
                        entrepreneaur, as I have founded and sold my very own company, <a href="https://eztutor.com" target="_blank">EZtutor</a> (site has changed since my exit). 
                    </p>

                   

                    
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;