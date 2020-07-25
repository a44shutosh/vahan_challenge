import React, { Component } from 'react';
class ReceiveMsg extends React.Component {
    render() {
      return <div  className="setting-left">
      <div className="reply">
        <p className="blue">{this.props.text}</p>
      </div>
      </div>;
    }
  }

  export default ReceiveMsg;