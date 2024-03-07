const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listContainer");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let Task = document.createElement('li');
        Task.textContent = inputBox.value;
        listContainer.appendChild(Task);

        let span = document.createElement('span')
        span.textContent = '\u00d7';
        Task.appendChild(span)

    }
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener('click', (el)=>{
    if(el.target.tagName == 'LI'){
        el.target.classList.toggle('checked')
        saveData()
    }
    else if(el.target.tagName == 'SPAN'){
        el.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("tasks", listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem('tasks')
}
showData()