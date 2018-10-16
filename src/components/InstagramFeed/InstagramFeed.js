import React, {Component} from 'react';
import './InstagramFeed.css';


class InstagramFeed extends Component {

  render(){
    return(
      <div className="InstagramFeed-container">
        <div className="image-container">
          <div className="instagram-text-color"><h3>Join us backstage and follow us on Instagram at <p>comprendlife</p> </h3>
          </div>
          <div>
            <img src="comprendInstagram2.jpg"/>
          </div>
          <div>
            <img src="comprendInstagram.jpg"/>
          </div>
          <div>
            <img src="comprendInstagram3.jpg"/>
          </div>
        </div>
      </div>
    )
  }
}


export default InstagramFeed;
