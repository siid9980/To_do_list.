document.getElementById("addTaskBtn").addEventListener("click",function(){
    const taskInput=document.getElementById("taskInput");
    const taskText=taskInput.value.createElementtrim();

    if(taskText !==""){
        addTask(taskText);
        taskInput.value = "";
    }
});
function addTask(task){
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");

    li.textContent = task;
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}