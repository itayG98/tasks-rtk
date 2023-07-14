import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice";

const taskStore = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default taskStore;
