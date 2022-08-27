import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    inventory: [
      {
        id: Math.random(),
        name: "Item Name",
        title: "Name",
        fields: [
          {
            type: "text",
            label: "Name",
          },
        ],
      },
    ],
    items: [],
  },
  reducers: {
    setInventory: (state, action) => {
      state.inventory = action.payload;
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },

  extraReducers(builder) {},
});

export const { setInventory, setItems } = inventorySlice.actions;
export default inventorySlice.reducer;
