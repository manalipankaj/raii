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

        var clickedItem;
        
        newRowDiv.setAttribute("class","taskColomn");
        newRowDiv.innerHTML = "I am added";
        newRowDiv.setAttribute("draggable", "true");
        
        newRowDiv.addEventListener("mousedown",(ev) => {
            if(ev.srcElement.class === "task") {
                
            }
        });

        newRowDiv.addEventListener("dragover", (ev) => {
            if(ev.preventDefault) {
                ev.preventDefault()
            }
            return;
        });

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

            newTaskElement.addEventListener("dragover", () => {
                event.preventDefault = false;
            });

            newTaskElement.addEventListener("mousedown", (ev) => {
                clickedItem = id;

                newTaskElement.addEventListener("mousemove", (ev) => {
                    console.log(ev.pageX, ev.pageY)
                    newTaskElement.style.left = ev.pageX;
                    newTaskElement.style.left = ev.pageY;
                })

            //     ev.stopPropagation();
            //     return;
            });

            newRowDiv.appendChild(newTaskElement);
        });
    }
})();