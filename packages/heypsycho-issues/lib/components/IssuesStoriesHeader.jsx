import Telescope from 'meteor/nova:lib';
import React from 'react';
import Categories from "meteor/nova:categories";

const IssuesStoriesHeader = ({type}) => {
  
  return (
    <div className="stories-header">{type}</div>
  )
}

IssuesStoriesHeader.displayName = "IssuesStoriesHeader";

export default IssuesStoriesHeader;
