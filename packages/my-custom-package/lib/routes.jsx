/*
A new custom route for our custom page. 
Browse to http://localhost:3000/my-custom-route to see it.
*/

import Telescope from 'meteor/nova:lib';
import CustomPostsHome from './components/CustomPostsHome.jsx';

Telescope.routes.indexRoute = { 
  name: "issues", 
  component: CustomPostsHome
};