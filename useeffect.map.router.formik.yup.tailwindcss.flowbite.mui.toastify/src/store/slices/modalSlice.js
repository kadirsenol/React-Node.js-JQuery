import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({

    name:'modal',
    initialState:{
        status:false,
        isTriggeringDeleteProduct:false,
        isTriggeringDeleteCart:false,
        title:"",
        trigger:""        
    },
    reducers:{
        setModalStatus:(state,actions)=>{
            state.status = actions.payload.status
            if(actions.payload.triggering==="deleteProduct"){
                state.isTriggeringDeleteProduct=true
                state.title="İlgili ön siparişi silmek istediğinize emin misiniz ?"
                state.trigger=actions.payload.trigger
            }
            else if(actions.payload.triggering==='deleteCart'){
                state.isTriggeringDeleteCart=true
                state.title="Ön sipariş listesinin tamamını silmek istediğinize emin misiniz ?"
            }
        },
        setModalTriggering:(state)=>{
            state.isTriggeringDeleteCart = false;
            state.isTriggeringDeleteProduct = false
        }
    }

})

export const {setModalStatus,setModalTriggering} = modalSlice.actions
export default modalSlice.reducer