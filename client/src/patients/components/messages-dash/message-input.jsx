import React, { Component, PropTypes } from 'react';
import * as actions from '../../actions/messages.js';

export default class MessageInput extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: '',
      typing: false
    };
  }
  handleSubmit(event) {
    const { user, socket, activeChannel} = this.props;
    const text = event.target.value.trim();
    console.log("llllll", text)
    if (event.which === 13) {
      event.preventDefault();
      var newMessage = {
        id: `${Date.now()}`,
        direct_message: text,
        user: user
      };
      socket.emit('new message', newMessage);
      socket.emit('stop typing', { user: user });
      this.props.handleSave(newMessage);
      this.setState({ text: '', typing: false });
    }
  }
  handleChange(event) {
    const { socket, user } = this.props;
    this.setState({ text: event.target.value });
    if (event.target.value.length > 0 && !this.state.typing) {
      socket.emit('typing', { user: user });
      this.setState({ typing: true});
    }
    if (event.target.value.length === 0 && this.state.typing) {
      socket.emit('stop typing', { user: user });
      this.setState({ typing: false});
    }
  }
  render() {
    return (
      <div className="chatInput" style={{width: '100%'}}>
        <textarea
          style={{height: '100px'}}
          id='messageInput'
          type="textarea"
          name="message"
          ref="messageComposer"
          autoFocus="true"
          placeholder="Type here to chat!"
          value={this.state.text}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)}
        />
      </div>
    );
  }
}