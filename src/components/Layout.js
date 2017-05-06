/**
 * Created by sammy on 5/6/17.
 */
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
require('styles/App.css');

import React from 'react'

class Layout extends React.Component {
  render() {
    return (
        <div className ="container-fluid">
          {this.props.children}
        </div>

    );
  }
}


export default Layout;
