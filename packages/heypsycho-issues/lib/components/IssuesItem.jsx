import Telescope from 'meteor/nova:lib';
import Posts from "meteor/nova:posts";
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Link } from 'react-router';
// import { Button } from 'react-bootstrap';
// import moment from 'moment';
// import { ModalTrigger } from "meteor/nova:core";
// import Categories from "meteor/nova:categories";

class IssuesItem extends Telescope.components.PostsItem {

  render() {

    const post = this.props.post;

    let postClass = "posts-item";
    if (post.sticky) postClass += " posts-sticky";

    // ⭐ custom code starts here ⭐
    if (post.color) {
      postClass += " post-"+post.color+" grid";
    }

    postClass += " single-issue";
    // ⭐ custom code ends here ⭐

    return (
      <div className={postClass}>

        <div className="">

          {post.thumbnailUrl ? <Telescope.components.PostsThumbnail post={post}/> : null}

          <div className="posts-item-content">

            <h3 className="posts-item-title">
              <Link to={Posts.getLink(post)} className="posts-item-title-link" target={Posts.getLinkTarget(post)}>
                {post.title}
              </Link>
              {this.renderCategories()}
            </h3>

            <div className="posts-item-consequences">
              <h2>Consequences go here</h2>
            </div>

            <div className="row center-xs">
              <div className="col-sm-10">
                {post.body}
              </div>
            </div>

            <div className="posts-item-meta">
              {post.user? <div className="posts-item-user"><Telescope.components.UsersAvatar user={post.user} size="small"/><Telescope.components.UsersName user={post.user}/></div> : null}
              <div className="posts-item-date"><FormattedRelative value={post.postedAt}/></div>
              <div className="posts-item-comments">
                <Link to={Posts.getPageUrl(post)}>
                  <FormattedMessage id="comments.count" values={{count: post.commentCount}}/>
                </Link>
              </div>
              {this.context.currentUser && this.context.currentUser.isAdmin ? <Telescope.components.PostsStats post={post} /> : null}
              {this.renderActions()}
            </div>

            <div className="posts-item-vote">
              {/* Create a custom vote component that replaces the up arrow with an eye icon for watching */}
              <Telescope.components.Vote post={post} />
            </div>

            {this.renderCommenters()}

          </div>

        </div>

      </div>
    )
  }
}

IssuesItem.propTypes = {
  post: React.PropTypes.object.isRequired
}

IssuesItem.contextTypes = {
  currentUser: React.PropTypes.object
};

export default IssuesItem;
