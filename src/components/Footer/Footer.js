import React, {Component} from "react";
import "./Footer.css";


class Footer extends Component {

  render() {
    return (
      <nav className="footer navbar navbar-light">
        <div className="footer-container">
          <div className="first-line">
            <div className="footer-item">
              <span className="" href="#">© 2014-2018 Comprend</span>
            </div>
            <div className="footer-item">
              <a className="" href="#">Privacy notice</a>
            </div>
            <div className="footer-item">
              <a className="" href="#">Cookie policy</a>
            </div>
            <div className="footer-item">
              <a className="" href="#">Terms of use</a>
            </div>
            <div className="footer-item">
              <a className="" href="#">Subscribe to our newsletter</a>
            </div>
          </div>
          <div className="copyright-container">
            <a className="copyright-link" href="#">Comprend is part of H&H Group.</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Footer
