let data = [];

let viewTask = () => {
    let tbl = "";
    data.map((val, index) => {
        tbl += `
                    <tr>
                        <td>${val?.id}</td>
                        <td>${val?.taskname}</td>
                    </tr>
                `;
    })
    document.getElementById('todolist').innerHTML = tbl;
}

let addTask = () => {
    let task = document.getElementById('task').value;

    if (task == "") {
        alert("Please enter a task!");
        return false;
    }

    let duplicate = data.filter((val) => val.taskname == task);

    if (duplicate.length == 1) {
        alert("Task already exists...");
        document.getElementById('task').value = "";
        return false;
    }

    let object = {
        id: Math.floor(Math.random() * 1000),
        taskname: task,
    }

    document.getElementById('task').value = "";

    data.push(object);
    viewTask();
}