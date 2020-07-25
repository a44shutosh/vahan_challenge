import React, { Component } from 'react';
import '../../../../public/css/dashboard.css';

import SendMsg  from '../../../components/SendMsg.jsx';
import ReceiveMsg  from '../../../components/ReceiveMsg.jsx';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sendingMsg:"",
      msgs:[]
    }
  }

  onMessage(userMessage){
    return Promise.resolve({
    data: {
    botMessage: "Pardon my ignorance. I am just a dummy."
    }
    });
    };

    getMessage(){
      let msgs = this.state.msgs;
      let that = this;

     this.onMessage("herr").then(function(result){
        let text = result.data.botMessage;
        let msg = {"text": text, "type":"received"};
        
        msgs.push(msg);
        that.setState({msgs:msgs});
        return 0;
      })

      //return resp;
      
    }

handleKeyPress(event) {
  this.setState({sendingMsg:event.target.value})
}

sendMsg(){
  let msgBody = {"text":this.state.sendingMsg,"type":"send"};
  let msgs = this.state.msgs;
  msgs.push(msgBody);
  this.setState({sendingMsg:"", msgs:msgs},()=>{
    let receivetext =this.getMessage.bind(this);
    receivetext();
  });


}

renderMsgs(){

 let msgs = this.state.msgs;
 let i=0

  if(msgs!= null){
    const msgBody =  msgs.map((msg)=>{   
      if(msg.type=="send"){
        i++
       return  <SendMsg key={i} text={msg.text}/>
        
      }else{
        i++;
        return <ReceiveMsg key={i} text={msg.text}/>
      }  
  });
  return msgBody;
  }

}

  render() {

    const {
      classUserName,
      classPassName
    } = this.state;

    const {
      environment
    } = this.props;

    const {
      username
    } = environment;

    return (
      <div>
          <div >
            <button className="tablink" >Chat</button>
            <button className="tablink" >My Jobs</button>
            <button className="tablink" >Profile</button>
          </div>
          <div className="animated fadeIn float-left">
              <div className="card">
                <div>
                  <div className="card-header">
                    
                  </div>
                  
                  <div className="card-body">
                  <div className="content">
                  {this.renderMsgs()}
                  </div>
                </div>
              </div>
            </div>
        </div>
        
        <div id="info">
          <div className="reply-input">
            <input height="20px" type="text" className="text-input" onKeyPress={this.handleKeyPress.bind(this)} />
            <button className="replyButton" onClick={this.sendMsg.bind(this)}>>></button>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Dashboard;
