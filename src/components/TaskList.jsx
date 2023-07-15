import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./TaksItem";
import { fetchTasks, deleteTask } from "../store/tasksSlice";

const TaskList = function TaskList() {
  const tasksState = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <ul>
      {tasksState.loading && <p>Loading...</p>}
      {tasksState.error && (
        <div>
          {" "}
          <p className="error">An error occured</p>
        </div>
      )}
      {!tasksState.loading && tasksState.tasks.length
        ? tasksState.tasks.map((item, index) => (
            <div className="task">
              <li key={index}>
                <TaskItem task={item}></TaskItem>
              </li>
              <button
                onClick={() => {
                  dispatch(deleteTask(item.id));
                }}
              >
                Delete task
              </button>
            </div>
          ))
        : null}
      <div>
        <button
          onClick={() => {
            dispatch(fetchTasks());
          }}
        >
          Refetch data
        </button>
      </div>
    </ul>
  );
};

export default TaskList;
