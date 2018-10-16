import React, {
  Component
} from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return ( <
      nav className = "Header navbar navbar-light" >
      <a href="/"><img src="/logo.png" alt="Comprend"/></a>
      <
      ul className = "nav" >
      <
      li className = "nav-item" >
      <
      a className = "nav-link Header-link"
      href = "/" > HOME < /a> <
      /li> <
      li className = "nav-item" >
      <
      a className = "nav-link Header-link"
      href = "/jobs" > JOBS < /a> <
      /li> <
      li className = "nav-item" >
      <
      a className = "nav-link Header-link"
      href = "/users" > JOIN US < /a> <
      /li> <
      li className = "nav-item" >
      <
      a className = "nav-link Header-link"
      href = "#" > CONTACT < /a> <
      /li> <
      /ul> <
      /nav>


    );
  }
}

export default Header
