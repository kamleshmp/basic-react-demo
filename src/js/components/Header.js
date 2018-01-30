import React from "react";
import {Link} from 'react-router';
import Title from "./Header/Title";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-inverse">
          <Link className="navbar-brand" to="/">Home</Link>
          <Link className="navbar-brand" to="aboutus">Aboutus</Link>
          <Link className="navbar-brand" to="settings">Setting</Link>
          <Link className="navbar-brand" to="posts">Posts</Link>
          <Link className="navbar-brand" to="comments">Comments</Link>
        </nav>
      </div>
    );
  }
}
