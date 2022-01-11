import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodosList = ({ todos }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", width:"270px", margin:"0 auto", height:"300px"}}>

      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} idx={i} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos,
});
export default connect(mapStateToProps)(TodosList);
