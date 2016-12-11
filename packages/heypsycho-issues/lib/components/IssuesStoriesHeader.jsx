import Telescope from 'meteor/nova:lib';
import React from 'react';
import Categories from "meteor/nova:categories";

const IssuesStoriesHeader = ({type}) => {

  return (
    <h3 className="stories-header text-center lead-double">{type}</h3>
  )
}

IssuesStoriesHeader.displayName = "IssuesStoriesHeader";

export default IssuesStoriesHeader;
