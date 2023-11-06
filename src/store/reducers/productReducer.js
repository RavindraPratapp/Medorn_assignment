import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products : [],
  cart : []
}


export const productReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {

    addProducts : (state , action)=>{
        state.products = action.payload
    },
    addToCart : (state , action)=>{
      state.cart.push(action.payload)

    },
    removeFromCart : (state,action)=>{
      state.cart = action.payload
    }

  },
})



export const {addProducts , addToCart , removeFromCart} = productReducer.actions
export default productReducer.reducer