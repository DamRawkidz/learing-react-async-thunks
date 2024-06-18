import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removerUser = createAsyncThunk('users/remove' , async (user: any) => {
    const response = await axios.delete(`https://localhost:3005/users/${user.id}`)
    //   fix 
    return response.data
})

export { removerUser }