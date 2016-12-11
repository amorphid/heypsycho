import Telescope from 'meteor/nova:lib';
import React from 'react';

const IssuesStoriesList = ({results, currentUser, hasMore, ready, count, totalCount, loadMore, showHeader = false}) => {

  if (!!results.length) {
    return (
      <div className="posts-list">
        {showHeader ? <Telescope.components.PostsListHeader /> : null}
        <div className="posts-list-content">
          {results.map(post => <Telescope.components.IssuesStoriesItem post={post} key={post._id}/>)}
        </div>
      </div>
    )
  } else if (!ready) {
    return (
      <div className="posts-list">
        {showHeader ? <Telescope.components.PostsListHeader /> : null}
        <div className="posts-list-content">
          <Telescope.components.PostsLoading/>
        </div>
      </div>
    )
  } else {
    return (
      <div className="posts-list">
        {showHeader ? <Telescope.components.PostsListHeader /> : null}
        <div className="posts-list-content">
          <Telescope.components.PostsNoResults/>
        </div>
      </div>
    )  
  }
  
};

IssuesStoriesList.displayName = "IssuesStoriesList";

export default IssuesStoriesList;