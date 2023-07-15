import { useMemo } from "react";

const TaskItem = function TaskItem(props) {
  const { task } = props;
  const memoizedTask = useMemo(() => task, [task]);
  return (
    <div>
      <h2>{memoizedTask.title}</h2>
      <p>{memoizedTask.description}</p>
      <button>Update task</button>
    </div>
  );
};

export default TaskItem;
