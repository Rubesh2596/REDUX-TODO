import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import myImage from "../assets/image.png";
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
} from "../features/todos/todoSlice";

export default function Todo() {
  const [todoText, setTodoText] = useState("");
  const [editId, setEditId] = useState(null);

  const todos = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();

  function handleAddOrSave(e) {
    e.preventDefault();
    if (!todoText.trim()) return;

    if (editId !== null) {
      dispatch(editTodo({ id: editId, text: todoText }));
      setEditId(null);
      setTodoText("");
      return;
    }

    dispatch(addTodo(todoText));
    setTodoText("");
  }

  function handleEdit(todo) {
    setEditId(todo.id);
    setTodoText(todo.text);
  }

  function cancelEdit() {
    setEditId(null);
    setTodoText("");
  }

  const showNoTodo = todos.length === 0;
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="relative min-h-screen p-4 sm:p-10 bg-[#FFFBF0] font-mono overflow-hidden">
      
      <div className="absolute inset-0 z-0 opacity-[0.05]" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, size: '40px 40px', backgroundSize: '40px 40px' }}>
      </div>

      <div className="absolute -top-20 -left-20 text-[20rem] font-black text-black opacity-[0.02] select-none pointer-events-none rotate-12">
        DO IT.
      </div>
      <div className="absolute -bottom-40 -right-20 text-[25rem] font-black text-[#FF4500] opacity-[0.03] select-none pointer-events-none -rotate-12">
        FAST.
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none" 
           style={{ background: `repeating-linear-gradient(45deg, #000, #000 10px, #FF4500 10px, #FF4500 20px)` }}>
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto">
        
        <div className="flex justify-between items-center mb-6">
          <Link 
            to="/" 
            className="group flex items-center gap-2 text-xs font-black uppercase bg-white px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Base
          </Link>
          <div className="hidden sm:block text-right border-l-4 border-black pl-4">
            <p className="text-[10px] font-black opacity-40 uppercase tracking-widest leading-none">Efficiency Status</p>
            <p className="text-sm font-black uppercase">{completedCount}/{todos.length} Missions Cleared</p>
          </div>
        </div>

        <div className="bg-white border-[6px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-10 relative">
          
          <div className="mb-10 relative z-10">
            <h1 className="text-6xl sm:text-8xl font-black uppercase italic tracking-tighter leading-[0.8] mb-4">
              COMMAND<span className="text-[#FF4500]">.</span>
            </h1>
            <div className="flex gap-1">
                <div className="h-2 w-full bg-black"></div>
                <div className="h-2 w-12 bg-[#FF4500]"></div>
            </div>
            <p className="text-[10px] font-black uppercase mt-2 tracking-widest text-gray-400">Authorization: Admin // Session: Active</p>
          </div>

          <form onSubmit={handleAddOrSave} className="mb-12 relative z-10">
            <div className="flex flex-col gap-4">
              <div className="relative group">
                <input
                  id="todoInput"
                  placeholder="ENTER OBJECTIVE..."
                  className="w-full bg-[#f8f8f8] border-4 border-black p-5 text-xl sm:text-2xl font-black uppercase outline-none focus:bg-white focus:ring-4 focus:ring-[#B8FF59] transition-all placeholder:opacity-20"
                  type="text"
                  value={todoText}
                  onChange={(e) => setTodoText(e.target.value)}
                />
                <div className="absolute top-1/2 -translate-y-1/2 right-4 hidden sm:block opacity-10 font-black italic">
                    [TYPE_MODE]
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#fe5010] text-white border-4 border-black p-4 text-xl font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  {editId ? "Update Mission" : "Deploy Task +"}
                </button>
                {editId && (
                  <button
                    onClick={cancelEdit}
                    className="bg-black text-white px-6 border-4 border-black font-black uppercase hover:bg-red-500 transition-colors"
                  >
                    X
                  </button>
                )}
              </div>
            </div>
          </form>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-sm font-black uppercase bg-black text-white px-3 py-1">Active Operations</h2>
                <span className="h-[2px] flex-1 bg-black"></span>
            </div>

            {showNoTodo ? (
              <div className="py-12 flex flex-col items-center border-4 border-dashed border-black/10">
                <img src={myImage} alt="Empty" className="w-32 grayscale opacity-30 mb-4" />
                <p className="font-black text-black/20 text-xl uppercase italic">No Active Threats Detected.</p>
              </div>
            ) : (
              <ul className="space-y-6">
                {todos.map((todo) => (
                  <li
                    key={todo.id}
                    className={`group relative flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 border-4 border-black transition-all ${
                      todo.completed 
                        ? "bg-gray-100 opacity-60 translate-x-2 grayscale border-dashed" 
                        : "bg-white shadow-[8px_8px_00px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(255,69,0,1)] hover:border-[#FF4500]"
                    }`}
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          className="peer appearance-none w-8 h-8 border-4 border-black bg-white checked:bg-[#FF4500] cursor-pointer transition-all"
                          checked={todo.completed}
                          onChange={() => dispatch(toggleTodo(todo.id))}
                        />
                        <span className="absolute text-white font-black pointer-events-none hidden peer-checked:block">✓</span>
                      </div>

                      <span className={`text-xl font-black uppercase tracking-tight break-all ${
                        todo.completed ? "line-through decoration-4 decoration-[#FF4500]" : ""
                      }`}>
                        {todo.text}
                      </span>
                    </div>

                    <div className="flex gap-2 mt-4 sm:mt-0 w-full sm:w-auto justify-end">
                      <button
                        onClick={() => handleEdit(todo)}
                        className="bg-white border-2 border-black px-4 py-2 font-black text-xs uppercase hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => dispatch(deleteTodo(todo.id))}
                        className="bg-black text-white border-2 border-black px-4 py-2 font-black text-xs uppercase hover:bg-red-600 transition-all shadow-[2px_2px_0px_0px_rgba(255,69,0,1)] hover:shadow-none"
                      >
                        Kill
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="absolute top-0 right-0 p-4 opacity-[0.05] font-black text-9xl pointer-events-none select-none">
            01
          </div>
        </div>
        
        <p className="text-center mt-10 text-[10px] font-black uppercase opacity-30 tracking-[1em]">
          Priority Architecture // Deployment v2.6.4
        </p>
      </div>
    </div>
  );
}