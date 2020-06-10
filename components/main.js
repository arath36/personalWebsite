import React from 'react';
import Landing from './landpage';
import Resume from './resume';
import Hobby from './hobbies';
import Project from './projects';
import { Switch, Route } from 'react-router-dom'

const Main = () => (
    <Switch> 
        <Route exact path="/" component={Landing} />
        <Route path="/projects" component={Project}/>
        <Route path="/hobbies" component={Hobby}/>
        <Route path="/resume" component={Resume}/>
    </Switch>
)


export default Main;