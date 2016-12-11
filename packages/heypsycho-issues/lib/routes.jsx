/*
A new custom route for our custom page. 
Browse to http://localhost:3000/my-custom-route to see it.
*/

import Telescope from 'meteor/nova:lib';
import IssuesHome from './components/IssuesHome.jsx';

Telescope.routes.indexRoute = { 
  name: "issues", 
  component: IssuesHome
};