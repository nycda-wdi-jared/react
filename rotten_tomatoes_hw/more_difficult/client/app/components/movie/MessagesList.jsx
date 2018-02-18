import React, {Component} from 'react';

import Message from './Message';

export default class MessagesList extends Component {
  render() {
    const { messages, user_id, deleteMessage, openModal, addLiker } = this.props;

    const appendMessagesList = () => {
      if(messages){
        return messages.map((message, index) => {
          return (
            <Message
              messages={messages}
              addLiker={addLiker}
              openModal={openModal}
              deleteMessage={deleteMessage}
              user_id={user_id}
              message_user_id={message.user_id}
              message_id={message.id}
              message={message.message}
              key={index}
            />
          )
        })
      }
    }
    return (
        <ol style={{display: 'inline-flex'}}>
        	{appendMessagesList()}
        </ol>
    );
  }
};