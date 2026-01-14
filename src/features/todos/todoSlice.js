import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const text = action.payload.trim();
      if (!text) return;

      state.list.push({
        id: Date.now(),
        text,
        completed: false,
      });
    },

    toggleTodo: (state, action) => {
      const id = action.payload;
      const todo = state.list.find((t) => t.id === id);
      if (todo) todo.completed = !todo.completed;
    },

    deleteTodo: (state, action) => {
      const id = action.payload;
      state.list = state.list.filter((t) => t.id !== id);
    },

    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.list.find((t) => t.id === id);

      const trimmedText = text.trim();
      if (!todo || !trimmedText) return;

      todo.text = trimmedText;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
