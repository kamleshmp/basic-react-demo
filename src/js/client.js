import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Layout from "./components/Layout";
import Settings from "./components/pages/Settings";
import Aboutus from "./components/pages/Aboutus";
import Posts from "./components/pages/Posts";
import Comments from "./components/pages/Comments";

const app = document.getElementById('app');
ReactDOM.render(<Router history={hashHistory}>
  <Route path="/" component={Layout}>
    <Route path="settings" component={Settings}></Route>
    <Route path="aboutus" component={Aboutus}></Route>
    <Route path="posts" component={Posts}></Route>
    <Route path="comments" component={Comments}></Route>
  </Route>
</Router>, app);
