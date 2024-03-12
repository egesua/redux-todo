import React from "react";
import { FaCheck, FaTimes, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { markCompleted, toggleTodo } from "../redux/actions";

export const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}</span>
        <span
          className={`mr-4 ${
            todo.completed ? "line-through text-red-500" : " "
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="space-x-3 ml-8">
        <button
          onClick={() => dispatch(toggleTodo(index))}
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        {!todo.completed && (
          <button
            onClick={() => dispatch(markCompleted(index))}
            className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"
          >
            <FaCheck />
          </button>
        )}
        
        {todo.completed && (
          <button
            onClick={() => dispatch(markCompleted(index))}
            className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"
          >
            <FaTimes />
          </button>
        )}

      </div>
    </li>
  );
};

export default TodoItem;
