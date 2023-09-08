import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        products:[],
    },
    reducers:{
        addProduct:(state,action)=>{
            const item = state.products.find((item) => item.id === action.payload.id);
            if(item){
                item.quantity+=1;
            } else {
                state.products.push(action.payload);
              }
        },

        addQuantity:(state,action)=>{
            const item = state.products.find((item) => item.id === action.payload.id);

            if(item){
                item.quantity+=1;
            }
          

        },

        decQuantity:(state,action)=>{
            const item = state.products.find((item) => item.id === action.payload.id);
            item.quantity-=1;
            
        },
        removeItem:(state,action)=>{
            state.products=state.products.filter(item=>item.id !== action.payload.id)
  
        }
    }


})

export const {addProduct,addQuantity,decQuantity,removeItem} = cartSlice.actions;
export default cartSlice.reducer;



