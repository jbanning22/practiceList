import {createSlice, current} from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    groceries: [],
  },
  reducers: {
    deleteGroceryItem: (state, action) => {
      console.log('action.payload in todos.js is ', action.payload);

      state.groceries = state.groceries.filter(item => item !== action.payload);
    },
    addGroceryItem: (state, action) => {
      state.groceries.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {deleteGroceryItem, addGroceryItem} = todosSlice.actions;

export default todosSlice.reducer;
