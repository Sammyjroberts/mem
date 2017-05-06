/**
 * Created by sammy on 5/6/17.
 */
import React from 'react'

class Register extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">Sign Up</div>
            <div className="panel-body">
              <label>E-Mail</label>
              <input className ='form-control' type="email" name="email" />
              <label>Password</label>
              <input className ='form-control'  type="password" name="password" />
              <label>Confirm Password</label>
              <input className ='form-control'  type="password-confirm" name="password-confirm" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Register;

