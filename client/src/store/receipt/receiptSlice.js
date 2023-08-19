import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import receiptService from "../services/receiptService";

export const createReceipt = createAsyncThunk(
  "CREATE_RECEIPT",
  async (productId, thunkAPI) => {
    try {
      return await receiptService.createReceipt(productId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addProductToReceipt = createAsyncThunk(
  "ADD_PRODUCT_TO_RECEIPT",
  async ({ productId, receiptId }, thunkAPI) => {
    try {
      return await receiptService.addProductToReceipt(productId, receiptId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const changeQuantity = createAsyncThunk(
  "CHANGE_QUANTITY",
  async ({ productId, receiptId, action, quantity }, thunkAPI) => {
    try {
      return await receiptService.changeQuantity(
        productId,
        receiptId,
        action,
        quantity
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const closeReceipt = createAsyncThunk(
  "CLOSE_RECEIPT",
  async (receiptId, thunkAPI) => {
    try {
      return await receiptService.closeReceipt(receiptId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const receiptSlice = createSlice({
  name: "receipt",
  initialState: {
    receipt: { total: 0 },
    isError: false,
    isLoading: false,
    message: "",
  },
  extraReducers: (builder) => {
    builder.addCase(createReceipt.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createReceipt.fulfilled, (state, action) => {
      state.isLoading = false;
      state.receipt = action.payload;
    });
    builder.addCase(createReceipt.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.receipt = null;
    });

    
    builder.addCase(addProductToReceipt.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addProductToReceipt.fulfilled, (state, action) => {
      state.isLoading = false;
      state.receipt.productsInReceipt.push(action.payload.productInReceipt);
      state.receipt.total = action.payload.total;
    });
    builder.addCase(addProductToReceipt.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.receipt = null;
    });


    builder.addCase(changeQuantity.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(changeQuantity.fulfilled, (state, action) => {
      state.isLoading = false;

      let product = state.receipt.productsInReceipt.find(
        (product) => product.id === action.payload.id
      );
      if (!action.payload.quantity) {
        state.receipt.productsInReceipt =
          state.receipt.productsInReceipt.filter(
            (prod) => prod.ProductId !== action.payload.id
          );
      } else if (product) {
        product.quantity = action.payload.quantity;
      }

      state.receipt.total = action.payload.total;
    });
    builder.addCase(changeQuantity.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.receipt = null;
    });


    builder.addCase(closeReceipt.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(closeReceipt.fulfilled, (state, action) => {
      state.isLoading = false;
      state.receipt = { total: 0 };
      state.receipt.closed = action.payload.date;
    });
    builder.addCase(closeReceipt.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.receipt = null;
    });
  },
});

export default receiptSlice.reducer;
