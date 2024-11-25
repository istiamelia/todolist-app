import React, { useState } from "react";

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
              <section
                id="taskNameSection"
                className="flex flex-row items-center mb-5"
              >
                <label htmlFor="task_name">
                  <svg
                    className="stroke-gray-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 14 14"
                  >
                    <g
                      fill="none"
                      stroke=""
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M11.719 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h5.586a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707zM6.777 6.375h2.5m-2.5 3.469h2.5" />
                      <path d="m2.91 9.787l.838.838L5.145 8.67M2.91 6.256l.838.838l1.397-1.955" />
                    </g>
                  </svg>
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
                  <svg
                    className="fill-gray-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill=""
                      d="M3 6a1 1 0 0 0 0 2h26a1 1 0 1 0 0-2zm0 6a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2zm-1 7a1 1 0 0 0 1 1h26a1 1 0 1 0 0-2H3a1 1 0 0 0-1 1m1 5a1 1 0 1 0 0 2h17a1 1 0 1 0 0-2z"
                    />
                  </svg>
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
                  <svg
                    className="fill-gray-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill=""
                      d="M5.5 7a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-5a5 5 0 1 0 0 10a5 5 0 0 0 0-10m7 0h-1v2h1a3 3 0 1 1 0 6h-1v2h1a5 5 0 0 0 0-10M0 19a5 5 0 0 1 5-5h7a5 5 0 0 1 5 5v2h-2v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2H0zm24 0a5 5 0 0 0-5-5h-1v2h1a3 3 0 0 1 3 3v2h2z"
                    />
                  </svg>
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
                  <svg
                    className=" fill-gray-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill=""
                      d="M17.354 2.647a2.62 2.62 0 0 0-3.707 0l-5.5 5.5a.5.5 0 0 0-.132.232l-1 4a.5.5 0 0 0 .606.606l4-1a.5.5 0 0 0 .233-.131l5.5-5.5a2.62 2.62 0 0 0 0-3.707m-3 .707a1.621 1.621 0 0 1 2.293 2.293l-5.403 5.402l-3.057.764l.764-3.057zM10 4q.42.001.823.056l.854-.854a7 7 0 1 0 5.121 5.121l-.854.854Q16 9.582 16 10a6 6 0 1 1-6-6"
                    />
                  </svg>
                </label>
                <section id="taskStatusBtn" className="mx-3">
                  <div className="inline-block">
                    <input
                      type="radio"
                      name="task_status"
                      id="taskStatus1"
                      value="In Progress"
                      className="hidden peer"
                      checked
                    />
                    <label htmlFor="taskStatus1" className="taskStatus">
                      In Progress
                    </label>
                  </div>
                  <div className="inline-block">
                    <input
                      type="radio"
                      name="task_status"
                      id="taskStatus2"
                      value="In Review"
                      className="hidden peer"
                    />
                    <label htmlFor="taskStatus2" className="taskStatus">
                      In Review
                    </label>
                  </div>
                  <div className="inline-block">
                    <input
                      type="radio"
                      name="task_status"
                      id="taskStatus3"
                      value="Stuck"
                      className="hidden peer"
                    />
                    <label htmlFor="taskStatus3" className="taskStatus">
                      Stuck
                    </label>
                  </div>
                  <div className="inline-block">
                    <input
                      type="radio"
                      name="task_status"
                      id="taskStatus4"
                      value="Completed"
                      className="hidden peer"
                    />
                    <label htmlFor="taskStatus4" className="taskStatus">
                      Completed
                    </label>
                  </div>
                </section>
              </section>
              {/* TASK PRIORITY  */}
              <section
                id="taskPrioritySection"
                className="flex flex-row items-center mb-5"
              >
                <label htmlFor="task_priority">
                  <svg
                    className="fill-gray-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 11.744q0 1.968 1.332 3.339t3.28 1.406h1.134l-1.742-1.762l.708-.708L11.673 17l-2.962 3l-.707-.708L9.758 17.5H8.623q-2.356-.034-3.99-1.708Q3 14.12 3 11.75q0-2.398 1.657-4.074T8.692 6h3v1h-3Q6.74 7 5.37 8.377T4 11.744M14.077 17.5v-1H21v1zm0-5.25v-1H21v1zm0-5.25V6H21v1z" />
                  </svg>
                </label>
                <section id="taskPriorityBtn" className="mx-3">
                  <div className="inline-block">
                    <input
                      type="radio"
                      name="task_priority"
                      id="taskPriority1"
                      value="Could Have"
                      className="hidden peer"
                    />
                    <label htmlFor="taskPriority1" className="taskPriority">
                      Could Have
                    </label>
                  </div>
                  <div className="inline-block">
                    <input
                      type="radio"
                      name="task_priority"
                      id="taskPriority2"
                      value="Must Have"
                      className="hidden peer"
                    />
                    <label htmlFor="taskPriority2" className="taskPriority">
                      Must Have
                    </label>
                  </div>
                  <div className="inline-block">
                    <input
                      type="radio"
                      name="task_priority"
                      id="taskPriority3"
                      value="Nice to Have"
                      className="hidden peer"
                    />
                    <label htmlFor="taskPriority3" className="taskPriority">
                      Nice to Have
                    </label>
                  </div>
                  <div className="inline-block">
                    <input
                      type="radio"
                      name="task_priority"
                      id="taskPriority4"
                      value="Should Have"
                      className="hidden peer"
                    />
                    <label htmlFor="taskPriority4" className="taskPriority">
                      Should Have
                    </label>
                  </div>
                  <div className="inline-block">
                    <input
                      type="radio"
                      name="task_priority"
                      id="taskPriority5"
                      value="Not Important"
                      className="hidden peer"
                    />
                    <label htmlFor="taskPriority5" className="taskPriority">
                      Not Important
                    </label>
                  </div>
                </section>
              </section>
              <section
                id="projectName"
                className="flex flex-row items-center mb-5"
              >
                <label htmlFor="project_id">
                  <svg
                    className="fill-gray-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.25 6a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0v-7.5A.75.75 0 0 0 7.25 6M12 6a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-4.5A.75.75 0 0 0 12 6m4 .75a.75.75 0 0 1 1.5 0v9.5a.75.75 0 0 1-1.5 0z" />
                    <path d="M3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25V3.75C2 2.784 2.784 2 3.75 2M3.5 3.75v16.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25H3.75a.25.25 0 0 0-.25.25" />
                  </svg>
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
                  <svg
                    className="fill-gray-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 13.885q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23m4 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23m4 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23M5.616 21q-.691 0-1.153-.462T4 19.385V6.615q0-.69.463-1.152T5.616 5h1.769V2.77h1.077V5h7.154V2.77h1V5h1.769q.69 0 1.153.463T20 6.616v12.769q0 .69-.462 1.153T18.384 21zm0-1h12.769q.23 0 .423-.192t.192-.424v-8.768H5v8.769q0 .23.192.423t.423.192M5 9.615h14v-3q0-.23-.192-.423T18.384 6H5.616q-.231 0-.424.192T5 6.616zm0 0V6z" />
                  </svg>
                  <span className="mx-3 text-xs text-gray-main">
                    Start Date and End Date
                  </span>
                </section>
                <section className="flex flex-row items-start">
                  <input
                    type="date"
                    id="startDate"
                    name="start_date"
                    value=""
                    min="2024-01-01"
                    max="2030-12-31"
                    className="ml-7 w-auto text-xs rounded-md border-0 text-gray-text ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <span className="mx-3 text-xs text-gray-main place-self-center">
                    -
                  </span>
                  <input
                    type="date"
                    id="dueDate"
                    name="due_date"
                    value=""
                    min="2024-01-01"
                    max="2030-12-31"
                    className="w-auto text-xs rounded-md border-0 text-gray-text ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
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
