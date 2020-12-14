import React, { Component } from 'react';

export default class Secret extends Component {
    render() {
        return (
            <div>
                This is secret..
                <button onClick={this.props.auth.logout}>LogOut</button>
            </div>
        )
    }
}