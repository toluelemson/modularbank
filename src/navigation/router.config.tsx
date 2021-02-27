import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactUs from '../pages/contact.page/contact.page';
import { ROOT, CONTACT } from './CONSTANT';

export const RouterConfig = () => (
  <Switch>
    <Route path={ROOT} component={ContactUs} />
    <Route path={CONTACT} component={ContactUs} />
  </Switch>
);

export default RouterConfig
