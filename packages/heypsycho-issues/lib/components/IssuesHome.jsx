import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import { ListContainer /* , DocumentContainer */ } from "meteor/utilities:react-list-container";
import Posts from "meteor/nova:posts";

class IssuesHome extends Telescope.components.PostsHome {

  render() {

    const params = {...this.getDefaultView(), ...this.props.location.query, listId: "posts.list.main"};
    const {selector, options} = Posts.parameters.get(params);

    return (
      <ListContainer
        collection={Posts}
        publication="posts.list"
        selector={selector}
        options={options}
        terms={params}
        joins={Posts.getJoins()}
        component={Telescope.components.PostsGrid}
        cacheSubscription={true}
        listId={params.listId}
        limit={Telescope.settings.get("postsPerPage", 10)}
      />
    )
  }
}

export default IssuesHome;
