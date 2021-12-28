{
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

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
              <li class="tasks__item">
                ${task.content}
              </li>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();
    };

    init();
}