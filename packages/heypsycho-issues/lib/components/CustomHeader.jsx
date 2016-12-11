import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';

const CustomHeader = (props, {currentUser}) => {

  const logoUrl = Telescope.settings.get("logoUrl");
  const siteTitle = Telescope.settings.get("title", "Nova");
  const tagline = Telescope.settings.get("tagline");

  return (
    <div className="man-nav__wrapper">

      <div className="main-nav">

        <div className="logo">
          <Telescope.components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
          <h4 className="tagline">issues</h4>
        </div>

        <div className="nav">

          <div className="nav-user">
            {currentUser ? <Telescope.components.UsersMenu/> : <Telescope.components.UsersAccountMenu/>}
          </div>

          <div className="nav-new-post">
            <Telescope.components.PostsNewButton/>
          </div>

        </div>

      </div>
    </div>
  )
}

export default CustomHeader;
