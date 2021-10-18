import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Contact from './contact';
import Resume from './resume';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path='/blog' component={() => {
      window.location.href = 'https://blog.umutykaya.com';
      return null;
    }} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;
