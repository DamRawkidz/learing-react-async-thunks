import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { removerUser } from "../thunks/removerUser";

const userSlice =  createSlice({
    name: 'users',
    initialState: {
        data: [],
        isloding: false,
        error: null,

    },
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending,(state,action) => {
            state.isloding = true
        })
        builder.addCase(fetchUsers.fulfilled, (state,action) => {
            state.isloding = false
            state.data = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state,action) => {
            state.isloding  = false
            state.error =  null
        })
        

        builder.addCase(addUser.pending,(state, action) => {
            state.isloding = true;            
        })

        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isloding = false;
            (state.data as any).push(action.payload)
        })

        builder.addCase(addUser.rejected, (state, action) => {
            state.isloding  = false
            state.error = null
        })


        builder.addCase(removerUser.pending, (state, action) => {
            state.isloding = true;
            
        })
        builder.addCase(removerUser.fulfilled,(state, action) => {
            state.isloding = false
            state.data = state.data.filter((user: any) => {
                return user.id !== (action.payload as any).id
            })
        })
        builder.addCase(removerUser.rejected, (state, action) => {
            state.isloding  = false
            state.error = null
        })
    }
})

export const userReducer = userSlice.reducer;
