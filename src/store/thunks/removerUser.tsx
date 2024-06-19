import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removerUser = createAsyncThunk('users/remove' , async (user: any) => {
    await axios.delete(`http://localhost:3005/users/${user.id}`)
    //   fix 
    return user
})

export { removerUser }