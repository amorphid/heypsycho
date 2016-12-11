import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import { ListContainer /* , DocumentContainer */ } from "meteor/utilities:react-list-container";
import Posts from "meteor/nova:posts";
import Categories from "meteor/nova:categories";

class IssuesHome extends Telescope.components.PostsHome {

  render() {
    
    const issuesCategoryId = Categories.findOne({name: 'Issues'})._id;
    
    const params = {...this.getDefaultView(), ...this.props.location.query, listId: "posts.list.main"};
    const {selector, options} = Posts.parameters.get(params);
    selector['categories'] = issuesCategoryId;
    
    return (
      <ListContainer
        collection={Posts}
        publication="posts.list"
        selector={selector}
        options={options}
        terms={params}
        joins={Posts.getJoins()}
        component={Telescope.components.IssuesGrid}
        cacheSubscription={true}
        listId={params.listId}
        limit={Telescope.settings.get("postsPerPage", 10)}
      />
    )
  }
}

export default IssuesHome;
