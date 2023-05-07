import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAuto = createAsyncThunk(
    'auto/fetchAuto',
    async function() {
        try {
            const response = await axios.get('http://localhost:4000/data');
            const data = await response.data

            return data
          } catch (error) {
            console.error(error);
          }
    }
)

const initialState = {
    data: [],
    status: null,
    error: null,
    search: ''
}

export const autoReducer = createSlice({
    name: 'auto',
    initialState,
    reducers: {
      searchAuto: (state, action) => {
        state.search = action.payload
      }
    },
    extraReducers: {
        [fetchAuto.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchAuto.fulfilled]: (state, action) => {
            state.status = 'resolved'
            console.log(action.payload)
            state.data = action.payload
        },
        [fetchAuto.rejected]: (state, action) => {

        },
    }
  })

export const { searchAuto } = autoReducer.actions

export default autoReducer.reducer