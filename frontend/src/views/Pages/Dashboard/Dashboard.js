import React, { Component } from 'react';
import '../../../../public/css/dashboard.css';

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

     this.onMessage("herr").then(function(result){
        let text = result.data.botMessage;
        let msg = {"text": text, "type":"received"};
        
        msgs.push(msg);
        this.setState({msgs:msgs});
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
       return  <div key={i} className="setting-right">
       <div className="sendtext">
         <p className="blue">{msg.text}</p>
       </div>
       </div>;
        
      }else{
        i++;
        return <div key={i} className="setting-left">
        <div className="reply">
          <p className="blue">{msg.text}</p>
        </div>
        </div>;
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
            <input type="text" className="text-input" onKeyPress={this.handleKeyPress.bind(this)} />
            <button onClick={this.sendMsg.bind(this)}>Send</button>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Dashboard;
