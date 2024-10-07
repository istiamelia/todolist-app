let isCompleteMode = false;

function isComplete() {
    isCompleteMode = !isCompleteMode;
    loadPartial();
}

// Function to load partial completed task on index.ejs
async function loadPartial() {
    try {
        // Fetch the content of the partial
        const response = await fetch('/path/to/completed');
        // saving the promise response into string using method text()
        const partialContent = await response.text();

        // acessing HTML element through DOM
        const rootElement = document.getElementById("completed");
        const completedBtn = document.getElementById("completedBtn");

        // Inject the partial content into the root element
        if (rootElement && completedBtn) {
            rootElement.innerHTML = partialContent;

            // Toggle the visibility
            if (isCompleteMode) {
                rootElement.style.display = "block";
                completedBtn.style.background = "#86e7f87a";
            } else {
                rootElement.style.display = "none";
                completedBtn.style.background = "none";
            }

        }

    } catch (error) {
        console.error('Error loading partial:', error);
    }
}

// Functtion for customize the navigation menu
function navigationChild() {
    const menuName = ["My Tasks", "Team Members", "Calendar", "Messages"]
    const menuIcon: { [key: number]: string } = {
        0: `<svg class="fill-gray-icon" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 28 28"><path fill="" d="M4 5.25A3.25 3.25 0 0 1 7.25 2h13.5A3.25 3.25 0 0 1 24 5.25v12.129q-.181.12-.341.28L22.5 18.818V5.25a1.75 1.75 0 0 0-1.75-1.75H7.25A1.75 1.75 0 0 0 5.5 5.25v17.5c0 .966.784 1.75 1.75 1.75h8.068l1.5 1.5H7.25A3.25 3.25 0 0 1 4 22.75zm6.5 3.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m-1.25 6.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m0 5.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M12.75 8a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM12 14a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 12 14m.75 4.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm13.03 1.28l-6 6a.75.75 0 0 1-1.06 0l-2.998-2.998a.75.75 0 0 1 1.06-1.06l2.468 2.467l5.47-5.47a.75.75 0 1 1 1.06 1.061"/></svg>`,
        1: `<svg class="fill-gray-icon" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20"><path fill="" d="M10 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M7.5 4.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m8-.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-10 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m.6 11.998L5 15a2 2 0 0 1-2-2V9.25A.25.25 0 0 1 3.25 9h1.764c.04-.367.17-.708.365-1H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.404 2.973a5 5 0 0 1-.304-.975m9.496.975Q14.794 16 15 16a3 3 0 0 0 3-3V9.25C18 8.56 17.44 8 16.75 8h-2.129c.196.292.325.633.365 1h1.764a.25.25 0 0 1 .25.25V13a2 2 0 0 1-2.1 1.998a5 5 0 0 1-.304.975M7.25 8C6.56 8 6 8.56 6 9.25V14a4 4 0 0 0 8 0V9.25C14 8.56 13.44 8 12.75 8zM7 9.25A.25.25 0 0 1 7.25 9h5.5a.25.25 0 0 1 .25.25V14a3 3 0 1 1-6 0z"/></svg>`,
        2: `<svg class="fill-gray-icon" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4v36H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4V92h168v116a4 4 0 0 1-4 4m-100-92v64a4 4 0 0 1-8 0v-57.53l-10.21 5.11a4 4 0 0 1-3.58-7.16l16-8A4 4 0 0 1 108 120m60 28l-24 32h24a4 4 0 0 1 0 8h-32a4 4 0 0 1-3.2-6.4l28.78-38.37A11.88 11.88 0 0 0 164 136a12 12 0 0 0-22.4-6a4 4 0 0 1-6.92-4A20 20 0 0 1 172 136a19.8 19.8 0 0 1-4 12"/></svg>`,
        3: `<svg class="border-gray-icon" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38 8.81H19.266a4.5 4.5 0 0 0-4.5 4.5v13.244a4.5 4.5 0 0 0 4.5 4.5h6.287l9.553 4.325v-4.324H38a4.5 4.5 0 0 0 4.5-4.5V13.31a4.5 4.5 0 0 0-4.5-4.5"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.17 31.166v1.894c0 1.76-1.42 3.18-3.17 3.18h-4.08l-6.35 2.95v-2.95h-1.9c-1.75 0-3.17-1.42-3.17-3.18v-8.72c0-1.75 1.42-3.17 3.17-3.17h5.92"/></svg>`
    }
    const navigation = document.getElementById("navigation")
    for (let i = 0; i < menuName.length; i++) {
        const newDiv = document.createElement("div")
        newDiv.className = "flex flex-row justify-start px-3 place-items-center hover:bg-faded-gray active:bg-faded-gray py-3 rounded-lg"

        const newLink = document.createElement("a")
        newLink.className = "pl-2 text-gray-text text-sm"
        newLink.innerText = menuName[i];
        newLink.href = "#"

        const newIcon = document.createElement("div")
        newIcon.innerHTML = menuIcon[i];

        newDiv.append(newIcon)
        newDiv.append(newLink)
        navigation?.append(newDiv)
    }
}

// Function for customizing the color for task priorities and task status indicator
function taskDetail() {
    const taskPriorities = document.querySelectorAll(".task-priority")
    const taskStatuses = document.querySelectorAll(".task-status")
    const stateColor: { [key: number]: string[] }={
        0: ["text-yellow-700", "bg-yellow-100"],
        1: ["text-blue-700", "bg-blue-100"],
        2: ["text-red-700", "bg-red-100"],
        3: ["text-green-700", "bg-green-100"],
        4: ["text-gray-700", "bg-gray-100"]
    }
    const taskStatusList: string[] = ["In Progress", "In Review", "Stuck", "Completed"]
    const taskPrioritiesList:string[] =["Nice to Have", "Could Have", "Must Have", "Should Have", "Not Important"]
    
    taskPriorities.forEach((taskPriority,index) => {
        // Cast the Element as an HTMLElement since using QuerySelectorAll returns a list of generic Element that by default has innerText Property
        const [taskPriorityElement, taskStatusElement] = [
            taskPriority as HTMLElement, 
            taskStatuses[index] as HTMLElement
        ];

        const indexTaskPriority = taskPrioritiesList.indexOf(taskPriorityElement.innerText);
        const indexTaskStatus = taskStatusList.indexOf(taskStatusElement.innerText);
        // If the index is valid, add the corresponding classes from stateColor
        const elementsToUpdate = [
            { index: indexTaskPriority, element: taskPriorityElement },
            { index: indexTaskStatus, element: taskStatusElement }
          ];
          
          elementsToUpdate.forEach(({ index, element }) => {
            if (index !== -1 && stateColor[index]) {
              element.classList.add(...stateColor[index]);
            }
          });
    })

}

function openModalAddTask() {
    const addTaskBtn = document.getElementById("addTaskBtn");
    const closeAddTaskBtn = document.getElementById("closeAddTaskBtn");
    const addTaskForm = document.getElementById("addTaskForm");

    const addTaskFormElement = addTaskForm as HTMLElement;

    addTaskBtn?.addEventListener("click", () => {
        addTaskFormElement.classList.remove("opacity-[0]", "hidden");
        addTaskFormElement.classList.add("open", "opacity-[1]", "visible", "z-[999]");
    })
    closeAddTaskBtn?.addEventListener("click", () => {
        addTaskFormElement.classList.remove("open", "opacity-[1]", "visible", "z-[999]");
    })
}

function taskStatusAndPriorityStyles() {
    const taskStatusLabels = document.querySelectorAll(".taskStatus");
    const taskPriorityLabels = document.querySelectorAll(".taskPriority");
    const classNameLabel = "taskStatus peer-checked:bg-purple2 peer-checked:text-white mx-1 text-xs text-purple2 drop-shadow-sm px-3 py-1 w-auto focus:ring focus:ring-violet-300 bg-faded-gray hover:bg-purple3 hover:text-white rounded-full";
    taskPriorityLabels.forEach((taskPriorityLabel, index)=>{
        const elementsToUpdate = [
            {element: taskPriorityLabel },
            {element: taskStatusLabels[index] }
        ];
        elementsToUpdate.forEach(({element})=>{
            element.className = classNameLabel
        })
    })
    
}

document.addEventListener("DOMContentLoaded", () => {
    navigationChild();
    taskDetail();
    openModalAddTask();
    taskStatusAndPriorityStyles();
});

