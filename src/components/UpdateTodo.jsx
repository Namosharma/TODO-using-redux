import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../features/todo/todoSlice';

function UpdateTodo({ todo, setIsEditing }) {
  const [text, setText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id: todo.id, text }));
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        className="border px-2 py-1 rounded"
      />
      <button type="submit" className="ml-2 text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded">
        UpdateTodo
      </button>
    </form>
  );
}

export default UpdateTodo;
