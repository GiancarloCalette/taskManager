var nonImportantIcon = "fa-regular fa-star";
var importantIcon = "fa-solid fa-star";
var isImportant = false;
var isVisible = false;

function toggleImportant(){
    if(isImportant){
        isImportant = false;
        $("#formIcon").removeClass(importantIcon).addClass(nonImportantIcon);
    }
    else{
        isImportant = true;
        $("#formIcon").removeClass(nonImportantIcon).addClass(importantIcon);
    }
}

function toggleForm(){
    if(isVisible){
        isVisible = false;
        $("#form").hide();
    }
    else{
        isVisible = true;
        $("#form").show();
    }
}
function SaveTask(){
    let title = $("#txtTitle").val();
    let description = $("#txtDescription").val();
    let dueDate = $("#selDueDate").val();
    let category = $("#selCategory").val();
    let priority = $("#selPriority").val();
    let color = $("#selColor").val();
    let task = new Task(isImportant, title,description,dueDate,category,priority,color);
    console.log(task);
    displayTask(task);
}
function displayTask(task){
    let icon = "";
    if(task.isImportant){
        icon = `<i class='${importantIcon}'></i>`;
    }
    else{
        icon = `<i class='${nonImportantIcon}'></i>`;
    }
    let syntax = `<div class='task' style="border: 2px solid ${task.color}">
        ${icon}
        <div class='info'>
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        </div>
        <label class='category'>${task.category}</label>
        <div class='details'>
            <label>${task.priority}</label>
            <label>${task.dueDate}</label>
        </div>    
    </div>`;
    $("#pending-tasks").append(syntax);
}
function init(){
    console.log("Task manager");
    $("#formIcon").click(toggleImportant);
    $("#hideForm").click(toggleForm);
    $("#btnSave").click(SaveTask);
}

window.onload = init;