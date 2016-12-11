/*
This file centralizes all our custom component overrides. 
*/

import Telescope from 'meteor/nova:lib';

import CustomLayout from "./components/CustomLayout.jsx";
import CustomSubHeader from "./components/CustomSubHeader.jsx";
import CustomHeader from "./components/CustomHeader.jsx";
import CustomNewsletter from "./components/CustomNewsletter.jsx";
import IssuesHome from "./components/IssuesHome.jsx";
import CustomPostsGrid from "./components/CustomPostsGrid.jsx";
import CustomPostsGridItem from "./components/CustomPostsGridItem.jsx";

Telescope.components.Layout = CustomLayout;
Telescope.components.Header = CustomHeader;
Telescope.components.SubHeader = CustomSubHeader;
Telescope.components.Newsletter = CustomNewsletter;
Telescope.components.PostsHome = IssuesHome;
Telescope.components.PostsGrid = CustomPostsGrid;
Telescope.components.PostsGridItem = CustomPostsGridItem;
