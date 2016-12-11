import Telescope from 'meteor/nova:lib';
import React from 'react';
import { DocumentContainer } from "meteor/utilities:react-list-container";
import Posts from "meteor/nova:posts";

const IssuesSingle = (props, context) => {
  return (
    <DocumentContainer 
      collection={Posts} 
      publication="posts.single" 
      selector={{_id: props.params._id}}
      terms={props.params}
      joins={Posts.getJoins()}
      component={Telescope.components.IssuesPage}
    />
  )
};

IssuesSingle.displayName = "IssuesSingle";

export default IssuesSingle;