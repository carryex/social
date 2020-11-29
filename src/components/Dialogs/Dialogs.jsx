import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
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

  let addNewMessage = (formData) => {
    props.sendMessage(formData.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <AddMessageForm onSubmit={addNewMessage} />
    </div>
  );
};

export default Dialogs;
