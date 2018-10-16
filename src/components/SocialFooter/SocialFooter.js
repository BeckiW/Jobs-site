import React, {Component} from "react";
import './SocialFooter.css';

const URL = 'http://hellotechnigo.comprendwebsites.net/api/texts';


class SocialFooter extends Component {
  state = {
    data: []
  };

  componentWillMount(){
    fetch(URL)
      .then(data => data.json())
      .then((d) => {
        this.setState({
          data: d
        });
      })

  }

  render(){
    return (
      <div className="social-footer">
        <div className="social-footer-icons">
          <span className="social-text">Follow us</span>
          {
            this.state.data
              .filter(i => i.id === 'social')
              .map(
                item => item.properties
                  .map(
                    prop => <a href={prop.value} target="_blank" className="social-link">{this.getIcon(prop.name)}</a>
                  )
              )
          }
        </div>
      </div>
    );
  }

  getIcon = (name) => {
    if (name === 'facebook') {
      return <i className="fab fa-facebook-square footer-icon"/>
    }

    if (name === 'twitter') {
      return (<i className="fab fa-twitter footer-icon"/>);
    }

    if (name === 'instagram') {
      return (<i className="fab fa-instagram footer-icon"/>);
    }

    if (name === 'linkedin') {
      return <i className="fab fa-linkedin-in footer-icon"/>
    }
  }

}

export default SocialFooter;
