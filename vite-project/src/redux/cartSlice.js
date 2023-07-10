import { accordionActionsClasses } from "@mui/material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { calcTotalPrice, calcTotalAmount } from "../helpers/calcSlice";

export const fetchAllProducts = createAsyncThunk("cart/fetchAllProducts", async (args, thunkApi) => {
  const {rejectWithValue} = thunkApi;
  try{
    const res = await fetch(
      "https://64a7da98dca581464b84e4d7.mockapi.io/Products"
    );

      if(!res.ok) {
        throw new Error('Some problem with fetch data')
      }

    const data = await res.json();
    return data
  } catch(e) {
    return rejectWithValue(e.message)
  }

});

const initialState = {
  homeProducts: [],
  products: [],
  amount: 0,
  total: 0,
  isLoading: false,
  error: ''
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemID = action.payload.id;
      const item = state.products.find((item) => item.id === itemID);

      if (item) {
        item.amount++;
      } else {
        state.products.push({ ...action.payload, amount: 1 });
      }
      state.total = calcTotalPrice(state.products);
      state.amount = calcTotalAmount(state.products);
    },
    increaseAmount: (state, action) => {
      const itemID = action.payload.id;
      const item = state.products.find((item) => item.id === itemID);
      item.amount++;
      state.total = calcTotalPrice(state.products);
      state.amount = calcTotalAmount(state.products);
    },
    decreaseAmount: (state, action) => {
      const itemID = action.payload.id;
      const item = state.products.find((item) => item.id === itemID);

      if (item.amount > 1) {
        item.amount--;
      } else {
        state.products = state.products.filter((i) => i.id !== itemID);
      }
      state.total = calcTotalPrice(state.products);
      state.amount = calcTotalAmount(state.products);
    },
    removeAmount: (state, action) => {
      const itemID = action.payload.id;
      state.products = state.products.filter((i) => i.id !== itemID);
      state.total = calcTotalPrice(state.products);
      state.amount = calcTotalAmount(state.products);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.isLoading = true;
    }),
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.homeProducts = action.payload
    }),
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
});

export const { addToCart, increaseAmount, decreaseAmount, removeAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
