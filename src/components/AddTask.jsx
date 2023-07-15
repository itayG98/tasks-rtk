import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitTask } from "../store/tasksSlice";

const AddTask = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(false);
  const [isTitleTouched, setIsTitleTouched] = useState(false);

  const [description, setDescription] = useState("");
  const [isDescriptionTouched, setIsDescriptionTouched] = useState(false);
  const [isDescriptionValid, setIsDescriptionValid] = useState(false);

  const [formValidity, setFormValidity] = useState(false);

  const isValidLength = (value) => value.trim().length >= 3;

  const onUnFocusedHandler = (event, setter, validitySetter, touchSetter) => {
    const value = event.target.value;
    touchSetter(true);
    setter(value);
    const isValid = isValidLength(value);
    validitySetter(isValid);
    setFormValidity(isTitleValid && isDescriptionValid);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch(submitTask({ title: title, description: description }));
    setTitle("");
    setIsTitleTouched(false);
    setIsTitleValid(false);
    setDescription("");
    setIsDescriptionTouched(false);
    setIsDescriptionValid(false);
    setFormValidity(false);
    event.target.reset();
  };

  return (
    <form onSubmit={(event) => onSubmitHandler(event)}>
      <div>
        <label htmlFor="title">
          Enter task name
          <input
            className={isTitleTouched && !isTitleValid ? "invalid" : ""}
            type="text"
            placeholder="Reading"
            onChange={(event) =>
              onUnFocusedHandler(
                event,
                setTitle,
                setIsTitleValid,
                setIsTitleTouched
              )
            }
          />
        </label>
      </div>
      <div>
        <label htmlFor="description">
          Enter task description
          <input
            className={
              isDescriptionTouched && !isDescriptionValid ? "invalid" : ""
            }
            type="text"
            placeholder="Read 15 pages a day"
            onChange={(event) =>
              onUnFocusedHandler(
                event,
                setDescription,
                setIsDescriptionValid,
                setIsDescriptionTouched
              )
            }
          />
        </label>
      </div>
      <div>
        <label htmlFor="submit">
          <input type="submit" disabled={!formValidity} />
        </label>
      </div>
    </form>
  );
};

export default AddTask;
