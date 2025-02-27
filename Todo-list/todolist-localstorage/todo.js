const saveData = () => {
    return localStorage.getItem('alltask') ? JSON.parse(localStorage.getItem('alltask')) : [];
}

const viewTask = () => {

    document.getElementById('add').style.display = "block";
    document.getElementById('edit').style.display = "none";
    let tasks = saveData();
    let tbl = "";
    tasks.map((val, index) => {
        tbl += `
                   <tr>
                         <td>${val.taskid}</td>
                         <td>${val.task}</td>
                         <td>
                          <button class="btn btn-success btn-sm" style="padding: 5px 11px" onclick="edit('${val.taskid}','${val.task}')">Edit</button>
                         <button class="btn btn-warning btn-md ms-2" onclick="deletetask(${val.taskid})">
                            <i class="far fa-trash-alt" style="font-size: 17px"></i>
                         </button>
                         </td>
                    </tr>
                `
    })
    document.getElementById('alltask').innerHTML = tbl;
}
viewTask();

const deletetask = (id) => {
    let tasks = JSON.parse(localStorage.getItem('alltask'));
    tasks = tasks.filter(val => val.taskid !== id);
    localStorage.setItem('alltask', JSON.stringify(tasks));
    viewTask();
}

const clearAll = () => {
    localStorage.removeItem('alltask');
    viewTask();
}

const addTask = () => {

    let task = document.getElementById('task').value;

    if (task == "") {
        alert("Please enter a task!");
        return false;
    }

    let obj = {
        taskid: Math.floor(Math.random() * 10000000),
        task: task
    }

    let tasks = saveData();

    let dup = tasks.find(val => val.task == task);

    if (dup) {
        alert("Task is already exists");
        document.getElementById('task').value = ""
        return false;
    }

    let newdata = [...tasks, obj];   //spread operator
    // tasks.push(obj);
    localStorage.setItem('alltask', JSON.stringify(newdata));
    alert("record add")
    document.getElementById('task').value = ""
    viewTask();
}

const edit = (id, task) => {
    document.getElementById('add').style.display = "none";
    document.getElementById('edit').style.display = "block";
    document.getElementById('task').value = task;
    document.getElementById('editid').value = id;

    // let tasks = saveData();
    // let single = tasks.find(val => val.taskid == id);
    // document.getElementById('task').value = single.task;
}

// const editTask = () => {
//     let id = document.getElementById('editid').value;
//     let task = document.getElementById('task').value;
//     let tasks = saveData();
//     let single = tasks.find(val => val.taskid == id);
//     single.task = task;
//     localStorage.setItem('alltask', JSON.stringify(tasks));
//     alert("Record Edited...");
//     document.getElementById('add').style.display = "block";
//     document.getElementById('edit').style.display = "none";
//     document.getElementById('task').value = "";
//     viewTask();
// }