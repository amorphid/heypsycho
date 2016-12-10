import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';

const CustomSubHeader = (props, {currentUser}) => {
  
  const logoUrl = Telescope.settings.get("logoUrl");
  const siteTitle = Telescope.settings.get("title", "Nova");
  const tagline = Telescope.settings.get("tagline");

  return (
    <div className="header-wrapper">

      <nav className="sub-header">

        <div className="logo">
          <Telescope.components.Logo siteTitle={siteTitle} />
          {tagline ? <h2 className="tagline">{tagline}</h2> : "" }
        </div>

      </nav>
    </div>
  )
}

export default CustomSubHeader;
