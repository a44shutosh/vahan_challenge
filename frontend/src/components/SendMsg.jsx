import React, { Component } from 'react';
class SendMsg extends React.Component {
    render() {
      return <div className="setting-right">
      <div className="sendtext">
        <p className="blue">{this.props.text}</p>
      </div>
      </div>;
    }
  }

  export default SendMsg;