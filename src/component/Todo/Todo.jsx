import React from "react";
import langue from "../langue/CheckLangue";
import Todoitem from "./List";

const Todo = (props) => {
  let newItemList = React.createRef();
  let lst = props.todolist;
  const AddItemInToDoList = (props) => {
    let text = newItemList.current.value;
    let idlist = ++lst.length;
    lst.push({ id: idlist, mytodo: text });
    console.table(lst);
    newItemList.current.value = "";
  };

  return (
    <div>
      <h1>{langue() ? "To do list" : "Список справ"}</h1>
      <div>
        <textarea ref={newItemList}></textarea>
      </div>
      <div>
        <button onClick={AddItemInToDoList}>
          {langue() ? "+ Add" : "+ Додати"}
        </button>
      </div>
      <Todoitem todolist={props.todolist} />
    </div>
  );
};
export default Todo;
