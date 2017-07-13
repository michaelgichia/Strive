/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from "react";
import "!!style-loader!css-loader!./app.css";

export default class App extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    videoWeb:
      "http://res.cloudinary.com/dw3arrxnf/video/upload/v1499752908/video_dig9eb.web",
    videoMp4:
      "http://res.cloudinary.com/dw3arrxnf/video/upload/v1499753694/video_s9gc9l.mp4"
  };

  static propTypes = {
    children: React.PropTypes.node
  };
  
  render() {
    return (
      <div className="fullscreen-bg">
        {React.Children.toArray(this.props.children)}
        <video
          autoPlay
          muted
          loop
          className="fullscreen-bg__video"
          id="background-video"
          poster="http://res.cloudinary.com/dw3arrxnf/image/upload/v1499756053/header-bg_h4o4jk.jpg"
        >
          <source src={this.state.videoWeb} type="video/webm" />
          <source src={this.state.videoMp4} type="video/mp4" />
          Your browser does not support HTML5 video!
        </video>
      </div>
    );
  }
}

