(function() {
    const element = document.getElementById("main");
    const addButton = document.getElementById("addColomnButton");
    const colomnContainer = document.getElementById("colomnContainer");

    var taskCounter = 0

    addButton.addEventListener("click", () => {
        createColomn();
    });

    function createColomn() {
        const addTaskButton = document.createElement("button");

        const newRowDiv = document.createElement("div");
        newRowDiv.setAttribute("class","taskColomn");
        newRowDiv.innerHTML = "I am added";
        newRowDiv.setAttribute("draggable", "true");
        
        newRowDiv.addEventListener("drop",(ev) => {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");

            console.log(data);
            ev.target.appendChild(document.getElementById(data))
        });

        newRowDiv.addEventListener("dragover", (ev) => {
            ev.preventDefault();
        })

        newRowDiv.appendChild(addTaskButton);
        colomnContainer.appendChild(newRowDiv);

        addTaskButton.addEventListener("click", () => {
            taskCounter++;
            const id = Math.random();
            const newTaskElement = document.createElement("div");
            newTaskElement.setAttribute("class", "task");
            newTaskElement.setAttribute("id",id)
            newTaskElement.setAttribute("draggable", "true");
            newTaskElement.innerHTML = "task no "+taskCounter;
            newRowDiv.appendChild(newTaskElement);

            newTaskElement.addEventListener("dragstart", (ev) => {
                console.log("dragging");
                ev.dataTransfer.setData("text", id);
            })
        });
    }
})();