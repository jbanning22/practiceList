import {createSlice, current} from '@reduxjs/toolkit';

// const initialState = {
//   groceries: [],
// };

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    groceries: [],
  },
  reducers: {
    deleteGroceryItem: (state, action) => {
      state.groceries.filter(item => {
        if (item !== action.payload) {
          return item;
        }
      });
    },
    addGroceryItem: (state, action) => {
      //   state.value += action.payload;
      state.groceries.push(action.payload);
      console.log(current(state));
    },
  },
});

// Action creators are generated for each case reducer function
export const {deleteGroceryItem, addGroceryItem} = todosSlice.actions;

export default todosSlice.reducer;
