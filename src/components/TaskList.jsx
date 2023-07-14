import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./TaksItem";
import { fetchTasks } from "../store/tasksSlice";

const TaskList = function TaskList() {
  const tasksState = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <ul>
      test
      {!tasksState.loading && tasksState.tasks.length
        ? tasksState.tasks.map((item, index) => (
            <li key={index}>
              <TaskItem task={item}></TaskItem>
            </li>
          ))
        : null}
    </ul>
  );
};

export default TaskList;
