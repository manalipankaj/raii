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
            ev.target.appendChild(document.getElementById(data));
            ev.stopPropagation();
            return;
        });

        newRowDiv.addEventListener("dragover", (ev) => {
            ev.preventDefault();
            return;
        })

        newRowDiv.appendChild(addTaskButton);
        colomnContainer.appendChild(newRowDiv);

        addTaskButton.addEventListener("click", () => {
            taskCounter++;
            const id = new Date().getTime();
            const newTaskElement = document.createElement("div");
            
            newTaskElement.setAttribute("class", "task");
            newTaskElement.setAttribute("id",id)
            newTaskElement.setAttribute("draggable", "true");
            
            newTaskElement.innerHTML = "task no "+taskCounter;

            newTaskElement.addEventListener("dragstart", (ev) => {
                ev.dataTransfer.setData("text", id);
                ev.stopPropagation();
                return;
            });

            newRowDiv.appendChild(newTaskElement);
        });
    }
})();