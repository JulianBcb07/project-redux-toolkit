import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
  },
  reducers: {
    createProducts: (state, action) => {
      state.data.push(action.payload);
    },
    readProducts: (state, action) => {
      state.data = action.payload;
    },
    updateProducts: (state, action) => {
      const { id, name } = action.payload;
      const product = state.data.find((product) => product.id === id);

      if (product) {
        product.name = name;
      }
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      state.data = state.data.filter((product) => product.id !== id);
    },
  },
});

export const { createProducts, readProducts, updateProducts, deleteProduct } =
  productsSlice.actions;

export default productsSlice.reducer;

// El payload es el valor que viene de la API que estamos consumiendo
