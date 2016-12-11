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

          <div className="posts-item-content--single">

            <h1 className="posts-item-title">
              <Link to={Posts.getLink(post)} className="posts-item-title-link" target={Posts.getLinkTarget(post)}>
                {post.title}
              </Link>
              {this.renderCategories()}
            </h1>

            <div className="container">
              <div className="row center-xs lead-single">
                <div className="col-xs-11">
                  <div className="posts-item-consequences">
                    <div className="row">
                      <div className="col-xs-6 posts-item-consequences--left lead-single">
                        <h3 className="text-center lead-single">Consequences</h3>
                        <p className="text-center lead-single">
                          Until we hear from the company, we're going to take collective
                          action to ensure our voices are heard. Join us.
                        </p>
                        <ul>
                          <li><strong>100 stories</strong>: We'll issue a press release, designed to get the attention of traditional media outlets</li>
                          <li><strong>200 stories</strong>: We'll build a facebook ad campaign so people can hear your stories directly</li>
                          <li><strong>300 stories</strong>: We'll hire a lawyer to begin pursuing legal action</li>
                        </ul>
                      </div>
                      <div className="col-xs-6 posts-item-consequences--right lead-single">
                        <h3 className="text-center lead-single">Response</h3>
                        <p className="text-center lead-single">No official response yet&hellip;</p>
                        <p className="text-center lead-single">
                          Do you represent the organization?
                          <a className="btn btn-secondary" href="#">Respond</a>
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs">
                        <div className="amplify">
                          <h3 className="text-center lead-single">Do you have a story to share,<br />or can you help us amplify our voices?</h3>
                          <p className="text-center">
                            <a className="btn btn-secondary" href="#">Join us</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row center-xs">
                <div className="col-sm-10">

                  <p>
                    {post.body}
                  </p>


                  {/* Post meta stuff
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

                  {this.renderCommenters()}
                  */}

                  <div className="posts-item-vote">
                    {/* Create a custom vote component that replaces the up arrow with an eye icon for watching */}
                    <Telescope.components.Vote post={post} />
                  </div>

                </div>
              </div>

            </div>

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
