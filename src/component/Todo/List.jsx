import React from "react";

const MyItem = (props) => {
  let mytodo = props.mytodo;
  return (
    <div>
      <li>{mytodo}</li>
    </div>
  );
};
const Todoitem = (props) => {
    let todoitem = props.todolist.map(item => <MyItem mytodo={item.mytodo} />)
    return todoitem
}

export default Todoitem;
