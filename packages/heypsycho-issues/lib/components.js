/*
This file centralizes all our custom component overrides. 
*/

import Telescope from 'meteor/nova:lib';

import CustomLayout from "./components/CustomLayout.jsx";
import CustomSubHeader from "./components/CustomSubHeader.jsx";
import CustomHeader from "./components/CustomHeader.jsx";
import CustomNewsletter from "./components/CustomNewsletter.jsx";
import IssuesHome from "./components/IssuesHome.jsx";
import IssuesGrid from "./components/IssuesGrid.jsx";
import IssuesGridHeader from "./components/IssuesGridHeader.jsx";
import IssuesGridItem from "./components/IssuesGridItem.jsx";
import IssuesPage from "./components/IssuesPage.jsx";
import IssuesSingle from "./components/IssuesSingle.jsx";
import IssuesItem from "./components/IssuesItem.jsx";
import IssuesStoriesList from "./components/IssuesStoriesList.jsx";
import IssuesStoriesHeader from "./components/IssuesStoriesHeader.jsx";
import IssuesStoriesItem from "./components/IssuesStoriesItem.jsx";

Telescope.components.Layout = CustomLayout;
Telescope.components.Header = CustomHeader;
Telescope.components.SubHeader = CustomSubHeader;
Telescope.components.Newsletter = CustomNewsletter;
Telescope.components.IssuesHome = IssuesHome;
Telescope.components.IssuesGrid = IssuesGrid;
Telescope.components.IssuesGridHeader = IssuesGridHeader;
Telescope.components.IssuesGridItem = IssuesGridItem;
Telescope.components.IssuesPage = IssuesPage;
Telescope.components.IssuesSingle = IssuesSingle;
Telescope.components.IssuesItem = IssuesItem;
Telescope.components.IssuesStoriesList = IssuesStoriesList;
Telescope.components.IssuesStoriesHeader = IssuesStoriesHeader;
Telescope.components.IssuesStoriesItem = IssuesStoriesItem;
