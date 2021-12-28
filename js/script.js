{
    const welcome = () => {
        console.log("Welcome on my page developer! 😍")
    }

    const tasks = [
        {
            content: "zrobić kurs youcode",
            done: false,
        },
        {
            content: "umyć naczynia",
            done: true,
        },
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindsEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-doneToggle");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleDone(index);
            });
        });
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
              <li
                class="tasks__item js-tasks"
              >
                <button class="tasks__button tasks__button--doneToggle js-doneToggle">
                 ${task.done ? "✔" : ""}
                </button>
                <span class="tasks__content ${task.done ? "tasks__content--done": ""}">
                 ${task.content}</span>
                <button class="tasks__button tasks__button--remove js-remove">
                🗑
                </button>
               </li>    
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindsEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        welcome();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}