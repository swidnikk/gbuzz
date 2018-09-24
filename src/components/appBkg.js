'use strict';

import React, {Component} from 'react';

class AppBkg extends Component {
  constructor (props) {
    super(props);

    this.state = {
      videoURL: '../assets/images/bg.mp4'
    }
  }

  render () {
    return (
        <video id="video-bg"
              type="video/mp4"
               src={this.state.videoURL}
               loop autoPlay muted>
        </video>
    )
  }
};

export default AppBkg;
