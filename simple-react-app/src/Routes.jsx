import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Autos, RealEstate, Jobs, AllClassifieds } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={RealEstate} />
    {/*<Route path="/realestate" component={RealEstate} />*/}
    <Route path="/autos" component={Autos} />
    <Route path="/jobs" component={Jobs} />
    <Route path="/allclassifieds" component={AllClassifieds} />
  </Switch>
);

export default Routes;
