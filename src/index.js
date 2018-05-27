(function() {
    const element = document.getElementById("main");
    const addButton = document.getElementById("addColomnButton");
    const colomnContainer = document.getElementById("colomnContainer");
    
    // Drag and drop 
    var dFlag = 0;
    var mFlag = 0;
    let selected;

    function moveElem(e) {
        if(dFlag) {
          var elem = document.getElementById(selected);
        //   elem.style.position = 'absolute';
          elem.style.top = e.clientY + 'px';
          elem.style.left = e.clientX + 'px';
          mFlag = 1;
        }
      }

    colomnContainer.addEventListener("mousedown",(ev) => {
        if(ev.srcElement.className === "task") {
            selected = ev.srcElement.id;
            dFlag = 1;
        }
    });
    colomnContainer.addEventListener("mousemove", moveElem);

    colomnContainer.addEventListener("mouseup", (event) => {
        if(mFlag) {

            // colomnContainer.removeEventListener("mousemove", moveElem);

            let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
            let droppableBelow = elemBelow.closest('.taskColomn');     
            droppableBelow.appendChild(document.getElementById(selected));
            event.stopPropagation();
        }
        mFlag = 0;
        dFlag = 0;
    });
    // Drag and drop ends

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
        // newRowDiv.setAttribute("draggable", "true");

        // newRowDiv.addEventListener("dragover", (ev) => {
        //     if(ev.preventDefault) {
        //         ev.preventDefault()
        //     }
        // });

        newRowDiv.appendChild(addTaskButton);
        colomnContainer.appendChild(newRowDiv);

        addTaskButton.addEventListener("click", () => {
            taskCounter++;
            const id = new Date().getTime();
            const newTaskElement = document.createElement("div");
            
            newTaskElement.setAttribute("class", "task");
            newTaskElement.setAttribute("id",id)
            // newTaskElement.setAttribute("draggable", "true");
            
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