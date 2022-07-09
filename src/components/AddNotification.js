import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import DatePicker from "react-date-picker";

export default function AddNotification() {
  const [title, setTitle] = React.useState("");
  const [linkedIn, setlinkedIn] = React.useState("");
  const [value, onChange] = React.useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "notification"), {
        title,
        linkedIn,
        date: value,
      });
      setTitle("");
      setlinkedIn("");
      onChange("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter Name..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter linkedIn ID..."
          value={linkedIn}
          onChange={(e) => setlinkedIn(e.target.value)}
        />
      </div>
      <DatePicker
        onChange={onChange}
        value={value}
        format="dd-MM-y"
        dayPlaceholder="dd"
        monthPlaceholder="mm"
        yearPlaceholder="yy"
      />
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
}
