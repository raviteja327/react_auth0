import React, { Component } from 'react';

export default class Main extends Component {
    render() {
        return (
            <div>
              Mr.  {this.props.name}
              <br/>
              Do you want to see the secret area?
              <a href="/secret">Click here for secret</a>

            {!this.props.isAuthenticated && 
              <div>
                  <hr />
                  Please login first
                  <hr />
                  <button onClick={this.props.auth.login}>Login</button>
              </div>
            }
            </div>
        )
    }
}