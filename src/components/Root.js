
import React from 'react';
import { Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Layout from './Layout';
import Register from './Register'

class Root extends React.Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Layout>
          <Route path='/register' component={Register}/>
        </Layout>
      </Router>
    );
  }
}


export default Root;
