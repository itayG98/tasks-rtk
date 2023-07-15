import { useState } from "react";

const AddTask = function AddTask() {
  return (
    <form>
      <div>
        <label htmlFor="name">
          Enter tasks name
          <input type="text" placeholder="Reading" />
        </label>
      </div>
      <div>
        <label htmlFor="description">
          Enter tasks description
          <input type="text" placeholder="Read 15 pages a day" />
        </label>
      </div>
    </form>
  );
};

export default AddTask;
