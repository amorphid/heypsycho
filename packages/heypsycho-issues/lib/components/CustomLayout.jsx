import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import { FlashContainer } from "meteor/nova:core";
import { withRouter } from 'react-router'

class CustomLayout extends Telescope.components.Layout {

  render() {

    let currentLocation = this.props.router.getCurrentLocation();
    let pathname = currentLocation.pathname;

    return (
      <div className="wrapper" id="wrapper">

        <Telescope.components.HeadTags />

        <Telescope.components.UsersProfileCheck {...this.props } />

        <header className="title-block">
          <Telescope.components.Header {...this.props}/>
          { pathname == '/' ? <Telescope.components.SubHeader {...this.props}/> : ""}
        </header>

        <div className="main">

          <FlashContainer component={Telescope.components.FlashMessages}/>

          {/* pathname == '/' ? <Telescope.components.Newsletter /> : "" */}

          {this.props.children}

        </div>

        {/* <Telescope.components.Footer {...this.props}/> */}

      </div>
    )

  }

}

export default withRouter(CustomLayout);
