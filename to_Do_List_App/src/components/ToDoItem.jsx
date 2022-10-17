import React from "react";

export default function ToDoItems(props) {
  return (
    <div onClick={() => props.onChecked(props.id)}>
      <li>{props.text}</li>
    </div>
  );
}
