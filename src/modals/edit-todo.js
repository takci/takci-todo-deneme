import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../stores/todo";
import { FiCheckSquare, FiSquare } from "react-icons/fi";
import { IoCloseCircle, IoCheckmarkCircle } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";

export default function EditTodo({ data, close }) {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState(data.title);
  const [done, setDone] = useState(data.done);

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(
      editTodo({
        id: data.id,
        title: todo,
        done,
      })
    );
    close();
  };

  const handleCheckboxClick = () => {
    setDone(!done);
  };

  return (
    <div>
      <form className="edit-todo-form" onSubmit={submitHandle}>
        <input
          placeholder="Edit todo..."
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />{" "}
        <br />
        <label style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={done}
            onChange={(e) => setDone(e.target.checked)}
            style={{ display: "none" }}
          />
          Is it done?
        </label>{" "}
          <div onClick={handleCheckboxClick} style={{ cursor: "pointer"}}>
            {done ? <IoCheckmarkCircle size={24} /> : <IoCloseCircle size={24} />}
          </div>
        <br />
        <button className="save-btn" type="submit">
          Save
        </button>
        <button className="close-btn" type="button" onClick={close}>
          Close
        </button>
      </form>
    </div>
  );
}