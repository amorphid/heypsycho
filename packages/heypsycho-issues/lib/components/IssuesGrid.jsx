import Telescope from 'meteor/nova:lib';
import Posts from "meteor/nova:posts";
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Link } from 'react-router';

const IssuesGrid = ({results, currentUser, hasMore, ready, count, totalCount, loadMore, showHeader = true}) => {

  if (!!results.length) {

    return (
      <div className="posts-list container">
        {showHeader ? <Telescope.components.PostsListHeader /> : null}
        <div className="posts-list-content posts-grid row">
          {results.map(post => <Telescope.components.IssuesGridItem post={post} key={post._id}/>)}
        </div>
        {hasMore ? (ready ? <Telescope.components.PostsLoadMore loadMore={loadMore} count={count} totalCount={totalCount} /> : <Telescope.components.PostsLoading/>) : <Telescope.components.PostsNoMore/>}
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
      <div className="posts-list posts-grid">
        {showHeader ? <Telescope.components.PostsListHeader /> : null}
        <div className="posts-list-content">
          <Telescope.components.PostsNoResults/>
        </div>
      </div>
    )
  }

};

export default IssuesGrid;
