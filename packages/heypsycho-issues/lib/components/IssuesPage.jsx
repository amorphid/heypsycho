import Telescope from 'meteor/nova:lib';
import React from 'react';
import Posts from "meteor/nova:posts";
import Categories from "meteor/nova:categories";
import { ListContainer } from "meteor/utilities:react-list-container";


const IssuesPage = ({document, currentUser}) => {

  const post = document;
  const htmlBody = {__html: post.htmlBody};

  const praiseCategoryId = Categories.findOne({name: 'Praises'})._id;
  const grievancesCategoryId = Categories.findOne({name: 'Grievances'})._id;

  const params = {};
  const {selector, options} = Posts.parameters.get(params);

  const praisesSelector = Object.assign({}, selector);
  praisesSelector['categories'] = praiseCategoryId;

  const grievancesSelector = Object.assign({}, selector);
  grievancesSelector['categories'] = grievancesCategoryId;

  return (
    <div className="posts-page">

      <div className="container">
        <div className="row">
          <Telescope.components.HeadTags url={Posts.getLink(post)} title={post.title} image={post.thumbnailUrl} />
        </div>
      </div>

      <Telescope.components.IssuesItem post={post}/>

      <div className="container">
        <div className="stories-lists row">

          <div className="col-sm-6">
            <Telescope.components.IssuesStoriesHeader type="Praises"/>
            <ListContainer
              collection={Posts}
              publication="posts.list"
              selector={praisesSelector}
              options={options}
              terms={params}
              joins={Posts.getJoins()}
              component={Telescope.components.IssuesStoriesList}
              cacheSubscription={true}
              listId="praise"
              limit={Telescope.settings.get("postsPerPage", 10)}
            />
          </div>

          <div className="col-sm-6">
            <Telescope.components.IssuesStoriesHeader type="Grievances"/>
            <ListContainer
              collection={Posts}
              publication="posts.list"
              selector={grievancesSelector}
              options={options}
              terms={params}
              joins={Posts.getJoins()}
              component={Telescope.components.IssuesStoriesList}
              cacheSubscription={true}
              listId="grievance"
              limit={Telescope.settings.get("postsPerPage", 10)}
            />
          </div>

        </div>
      </div>

      {/* <Telescope.components.PostsCommentsThread document={post} /> */ }

    </div>
  )
};

IssuesPage.displayName = "IssuesPage";

export default IssuesPage;
