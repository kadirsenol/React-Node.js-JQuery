import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({

    name:"cart",
    initialState:{
        value:0,
        valuesecond:[]   
    },
    reducers:{
        arttir:(state)=>{
            state.value += 1},
        yukle:(state,action) =>{
            state.value = 0
            state.valuesecond.push(action.payload)
        }
    }
})

export const {arttir,yukle} = cartSlice.actions
export default cartSlice.reducer

