let data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];

const viewTask = () => {

    let tasks = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];

    let tbl = "";

    tasks.map((val, index) => {
        tbl += `
                        <tr>
                            <td>${val.taskid}</td>    
                            <td>${val.taskname}</td>    
                        </tr>
                    `;
    })

    document.getElementById('alltask').innerHTML = tbl;

}
viewTask();

const addTask = () => {
    let task = document.getElementById('task').value;

    let tasks = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];

    let obj = {
        taskid: Math.floor(Math.random() * 100000),
        taskname: task
    }

     // ...  => spread operator to copy the array and add the new data
    let newdata = [
        ...tasks, {
            taskid: obj.taskid,
            taskname: obj.taskname
        }
    ];

    localStorage.setItem('data', JSON.stringify(newdata));
    alert("Task successfully added...");
    document.getElementById('task').value = "";
    viewTask();

    // if (localStorage.getItem('data') === null || localStorage.getItem('data') === undefined) {
    //     data.push(obj);
    //     localStorage.setItem('data', JSON.stringify(data));
    //     alert("Task successfully added...");
    //     document.getElementById('task').value = "";
    //     viewTask();
    // }
    // else {
    //     let tasks = JSON.parse(localStorage.getItem('data'));
    //     tasks.push(obj);
    //     localStorage.setItem('data', JSON.stringify(tasks));
    //     alert("Task successfully added...");
    //     document.getElementById('task').value = "";
    //     viewTask();
    // }
}