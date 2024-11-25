import React, { useState } from "react";
import Icons from "../utils/Icons";
import svgPaths from "../../assets/svgPaths.json";

interface Props {
  name: string;
  value: string;
  defaultChecked?: boolean;
}

function StatusLabel({ name, value, defaultChecked }: Props) {
  return (
    <>
      <div className="inline-block">
        <input
          type="radio"
          name={name}
          id={value}
          value={value}
          className="hidden peer"
          defaultChecked={defaultChecked}
        />
        <label
          htmlFor={value}
          className="taskStatus cursor-pointer peer-checked:bg-purple2 peer-checked:text-white mx-1 text-xs text-purple2 drop-shadow-sm px-3 py-1 w-auto focus:ring focus:ring-violet-300 bg-faded-gray hover:bg-purple3 hover:text-white rounded-full"
        >
          {value}
        </label>
      </div>
    </>
  );
}

function DateInput({ id, name }: { id: string; name: string }) {
  return (
    <>
      <input
        type="date"
        id={id}
        name={name}
        value=""
        min="2024-01-01"
        max="2030-12-31"
        className=" w-auto text-xs rounded-md border-0 text-gray-text ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </>
  );
}

function AddTaskModal({
  visibility,
  onStatusChange,
}: {
  visibility: string;
  onStatusChange: (status: boolean) => void;
}) {
  return (
    <>
      <div
        id="addTaskForm"
        className={`addTaskForm ${visibility} bg-gray-500 bg-opacity-75 top-0 left-0 right-0 bottom-0 -z-[1] fixed`}
      >
        <div className="flex justify-center items-center text-center min-h-full">
          <div className="add-task-inner bg-white w-1/2 px-5 py-5 flex justify-items-start-start flex-col gap-x-1 rounded-xl">
            <form action="/todos" id="task-form" method="post">
              {/* TASK NAME */}
              <section
                id="taskNameSection"
                className="flex flex-row items-center mb-5"
              >
                <label htmlFor="task_name">
                  <Icons
                    color={"fill-gray-icon"}
                    viewBox={"0 0 18 18"}
                    size="1.2em"
                    path={svgPaths.taskIcons.task_name}
                    path2=""
                  />
                </label>
                <input
                  type="text"
                  name="task_name"
                  id="task_name"
                  className="mx-3 w-1/2 text-xs rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </section>

              <section
                id="taskDescriptionSection"
                className="flex flex-col justify-start mb-5"
              >
                <label
                  htmlFor="task_description"
                  className="flex flex-row items-start mb-3"
                >
                  <Icons
                    color={"fill-gray-icon"}
                    viewBox={"0 0 32 32"}
                    size="1em"
                    path={svgPaths.taskIcons.task_description}
                    path2=""
                  />
                  <span className="mx-3 text-xs text-gray-main">
                    Description
                  </span>
                </label>
                <textarea
                  name="task_description"
                  id="task_description"
                  className="mx-7 w-1/2 text-xs rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </section>
              {/* TASK ASIGNEE */}
              <section
                id="taskAsigneeSection"
                className="flex flex-row items-center mb-5"
              >
                <label htmlFor="task_asignee">
                  <Icons
                    color={"fill-gray-icon"}
                    viewBox={"0 0 24 24"}
                    size="1em"
                    path={svgPaths.taskIcons.task_asignee}
                    path2=""
                  />
                </label>
                <select
                  name="task_asignee"
                  id="task_asignee"
                  className="mx-3 w-auto text-xs rounded-md border-0 text-gray-text ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="Isti Amelia Isnaeni">
                    Isti Amelia Isnaeni
                  </option>
                </select>
              </section>
              {/* TASK STATUS */}
              <section
                id="taskStatusSection"
                className="flex flex-row items-center mb-5"
              >
                <label htmlFor="task_status">
                  <Icons
                    color={"fill-gray-icon"}
                    viewBox={"0 0 20 20"}
                    size="1em"
                    path={svgPaths.taskIcons.task_status}
                    path2=""
                  />
                </label>
                <section id="taskStatusBtn" className="mx-3">
                  <StatusLabel
                    name="task_status"
                    value="In Progress"
                    defaultChecked
                  />
                  <StatusLabel name="task_status" value="In Review" />
                  <StatusLabel name="task_status" value="Stuck" />
                  <StatusLabel name="task_status" value="Completed" />
                </section>
              </section>
              {/* TASK PRIORITY  */}
              <section
                id="taskPrioritySection"
                className="flex flex-row items-center mb-5"
              >
                <label htmlFor="task_priority">
                  <Icons
                    color={"fill-gray-icon"}
                    viewBox={"0 0 24 24"}
                    size="1em"
                    path={svgPaths.taskIcons.task_priority}
                    path2=""
                  />
                </label>
                <section id="taskPriorityBtn" className="mx-3">
                  <StatusLabel name="task_priority" value="Could Have" />
                  <StatusLabel name="task_priority" value="Must Have" />
                  <StatusLabel name="task_priority" value="Nice to Have" />
                  <StatusLabel name="task_priority" value="Should Have" />
                  <StatusLabel name="task_priority" value="Not Important" />
                </section>
              </section>
              <section
                id="projectName"
                className="flex flex-row items-center mb-5"
              >
                <label htmlFor="project_id">
                  <Icons
                    color={"fill-gray-icon"}
                    viewBox={"0 0 24 24"}
                    size="1em"
                    path={svgPaths.taskIcons.project_name}
                    path2={svgPaths.taskIcons.project_name2}
                  />
                </label>
                <select
                  name="project_id"
                  id="project_id"
                  className="mx-3 w-auto text-xs rounded-md border-0 text-gray-text ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></select>
              </section>

              <section
                id="startAndEndDate"
                className="flex flex-col justify-start mb-5"
              >
                <section className="flex flex-row items-start mb-3">
                  <Icons
                    color={"fill-gray-icon"}
                    viewBox={"0 0 22 22"}
                    size="1.2em"
                    path={svgPaths.taskIcons.date}
                    path2=""
                  />
                  <span className="mx-3 text-xs text-gray-main">
                    Start Date and End Date
                  </span>
                </section>
                <section className="flex flex-row items-start pl-7">
                  <DateInput id="startDate" name="start_date" />
                  <span className="mx-3 text-xs text-gray-main place-self-center">
                    -
                  </span>
                  <DateInput id="endDate" name="end_date" />
                </section>
              </section>
              <section className="flex flex-row justify-end">
                <button
                  type="submit"
                  id="submitNewTaskBtn"
                  className="mx-1 text-xs text-white drop-shadow-sm px-3 py-1 w-auto ring-1 ring-purple2 focus:ring focus:ring-purple2  bg-purple2 active:bg-purple2 hover:bg-purple3 active:text-white hover:text-purple2 rounded-md flex flex-row place-items-center"
                >
                  Submit
                </button>
                <button
                  id="closeAddTaskBtn"
                  type="button"
                  className="text-xs text-delete drop-shadow-sm px-3 py-1 w-auto ring-1 ring-delete2 focus:ring
                focus:ring-delete bg-transparent active:bg-delete hover:bg-delete active:text-white hover:text-white
                rounded-md"
                  onClick={() => onStatusChange(false)}
                >
                  Close
                </button>
              </section>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTaskModal;
