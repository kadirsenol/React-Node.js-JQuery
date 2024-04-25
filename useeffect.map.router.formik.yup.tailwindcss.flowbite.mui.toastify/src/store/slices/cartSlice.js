import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({

    name:'cart',
    initialState:{
        order: 0,
        products : []
    },
    reducers: {
        addToCart: (state,action)=>{
            state.order += 1
            state.products.push(action.payload)
        },
        removeToCart:(state,action)=>{
            state.order -= 1
            state.products = state.products.filter(item=>!(item.name===action.payload.name))
        },
        emptyCart : (state)=>{
            state.order = 0
            state.products = []
        }
    }
})

export const {addToCart, emptyCart,removeToCart} = cartSlice.actions
export default cartSlice.reducer

