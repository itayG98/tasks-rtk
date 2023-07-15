import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  tasks: [],
  error: null,
};

const url = "http://localhost:3001/tasks";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", () => {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
});

export const submitTask = createAsyncThunk(
  "tasks/submitTasks",
  (task, { dispatch }) => {
    return axios
      .post(url, task)
      .then((response) => {
        dispatch(fetchTasks());
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tasks = action.payload;
      state.error = "";
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.isLoading = false;
      state.tasks = [];
      state.error = action.error.message;
    });
    builder.addCase(submitTask.fulfilled, (state) => {
      state.error = ""; 
    });
  },
});

export default tasksSlice.reducer;
