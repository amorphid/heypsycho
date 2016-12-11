import Telescope from 'meteor/nova:lib';
import React from 'react';
import Categories from "meteor/nova:categories";

const IssuesGridHeader = () => {

  return (
    <div>
      <div className="posts-list-header">
        <Telescope.components.SearchForm/>
      </div>
    </div>
  )
}

IssuesGridHeader.displayName = "IssuesGridHeader";

export default IssuesGridHeader;
