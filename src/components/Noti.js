import React from "react";

export default function Noti({ todo }) {
  console.log("in Noti", todo);
  let myDate = todo.date.toDate().toDateString();
  return (
    <div className="todo">
      <input
        type="text"
        value={todo.title}
        onChange={() => {}}
        className="list"
      />
      <input
        type="text"
        value={todo.linkedIn}
        onChange={() => {}}
        className="list"
      />
      <input type="text" value={myDate} onChange={() => {}} className="list" />
    </div>
  );
}
