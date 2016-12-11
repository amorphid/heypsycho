import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';

const CustomSubHeader = (props, {currentUser}) => {

  const logoUrl = Telescope.settings.get("logoUrl");
  const siteTitle = Telescope.settings.get("title", "Nova");
  const tagline = Telescope.settings.get("tagline");

  return (
    <nav className="site-title">
      <div className="container">
        <div className="row center-xs">
          <div className="col-sm-6">
            <Telescope.components.Logo siteTitle={siteTitle} />
            {tagline ? <h2 className="tagline">{tagline}</h2> : "" }
            <Telescope.components.IssuesGridHeader />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default CustomSubHeader;
