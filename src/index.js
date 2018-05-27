(function() {
    const element = document.getElementById("main");
    const addButton = document.getElementById("addColomnButton");
    const colomnContainer = document.getElementById("colomnContainer");
    var dFlag = 0;
    var mFlag = 0;

    colomnContainer.addEventListener("mousedown",(ev) => {
        if(ev.srcElement.className === "task") {
            dFlag = 1;
            //    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        }
    });

    colomnContainer.addEventListener("mousemove", () => {
        if(dFlag) {
            mFlag = 1;
        }
    })

    colomnContainer.addEventListener("mouseup", (event) => {
        console.log();
        if(mFlag) {
            console.log("dragging");
        }
        else {
            console.log("just up")
        }
        // let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
        // let droppableBelow = elemBelow.closest('.taskColomn');     
        // droppableBelow.appendChild(document.getElementById(selected));
        // event.stopPropagation();
        // return true;
    });

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

            // newTaskElement.addEventListener("mousedown", (ev) => {

            // //     ev.stopPropagation();
            // //     return;
            // });

            newRowDiv.appendChild(newTaskElement);
        });
    }
})();