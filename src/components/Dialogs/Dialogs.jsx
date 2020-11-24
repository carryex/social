import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <DialogItem
      key={dialog.id}
      id={dialog.id}
      name={dialog.name}
      avatar={dialog.avatar}
    />
  ));

  let messagesElements = props.messagesData.map((message) => (
    <Message key={message.id} id={message.id} message={message.message} />
  ));

  let newMessageElement = React.createRef();

  let onAddMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <div>
            <textarea
              ref={newMessageElement}
              value={props.newMessageText}
              onChange={onMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onAddMessage}>Add message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
