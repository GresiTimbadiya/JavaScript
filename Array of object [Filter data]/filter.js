let detail = [
    { id: 101, name: "Radha", email: "radha@gmail.com", gender: "female", salary: 20000, hobby: ["dancing", "singing"], city: "Chennai", post: "Designer" },
    { id: 102, name: "Ravi", email: "ravi@gmail.com", gender: "male", salary: 50000, hobby: ["cricket", "painting"], city: "Bangalore", post: "Developer" },
    { id: 103, name: "Kiran", email: "kiran@gmail.com", gender: "female", salary: 40000, hobby: ["dancing", "singing"], city: "Chennai", post: "Developer" },
    { id: 104, name: "Sita", email: "sita@gmail.com", gender: "female", salary: 25000, hobby: ["painting", "reading"], city: "Mumbai", post: "Accountant" },
    { id: 105, name: "Arjun", email: "arjun@gmail.com", gender: "male", salary: 35000, hobby: ["cricket", "singing"], city: "Pune", post: "Engineer" },
    { id: 106, name: "Meera", email: "meera@gmail.com", gender: "female", salary: 20000, hobby: ["singing", "writing"], city: "Kolkata", post: "HR" },
    { id: 107, name: "Raj", email: "raj@gmail.com", gender: "male", salary: 45000, hobby: ["chess", "reading"], city: "Delhi", post: "Manager" },
    { id: 108, name: "Priya", email: "priya@gmail.com", gender: "female", salary: 32000, hobby: ["dancing", "reading"], city: "Chennai", post: "Developer" },
    { id: 109, name: "Vijay", email: "vijay@gmail.com", gender: "male", salary: 22000, hobby: ["cricket", "chess"], city: "Hyderabad", post: "Scientist" },
    { id: 110, name: "Neha", email: "neha@gmail.com", gender: "female", salary: 27000, hobby: ["cricket", "reading"], city: "Bangalore", post: "Designer" },
    { id: 111, name: "Ramesh", email: "ramesh@gmail.com", gender: "male", salary: 39000, hobby: ["football", "dancing"], city: "Mumbai", post: "Engineer" },
    { id: 112, name: "Anjali", email: "anjali@gmail.com", gender: "female", salary: 42000, hobby: ["reading", "painting"], city: "Pune", post: "Scientist" },
    { id: 113, name: "Sunil", email: "sunil@gmail.com", gender: "male", salary: 38000, hobby: ["chess", "painting"], city: "Chennai", post: "Developer" },
    { id: 114, name: "Karthik", email: "karthik@gmail.com", gender: "male", salary: 26000, hobby: ["singing", "singing"], city: "Delhi", post: "Writer" },
    { id: 115, name: "Sneha", email: "sneha@gmail.com", gender: "female", salary: 35000, hobby: ["painting", "writing"], city: "Hyderabad", post: "Accountant" },
    { id: 116, name: "Pankaj", email: "pankaj@gmail.com", gender: "male", salary: 29000, hobby: ["cricket", "dancing"], city: "Kolkata", post: "Developer" },
    { id: 117, name: "Kavya", email: "kavya@gmail.com", gender: "female", salary: 48000, hobby: ["reading", "writing"], city: "Mumbai", post: "Manager" },
    { id: 118, name: "Amit", email: "amit@gmail.com", gender: "male", salary: 33000, hobby: ["cricket", "singing"], city: "Bangalore", post: "Engineer" },
    { id: 119, name: "Divya", email: "divya@gmail.com", gender: "female", salary: 31000, hobby: ["dancing", "reading"], city: "Pune", post: "Engineer" },
    { id: 120, name: "Vikas", email: "vikas@gmail.com", gender: "male", salary: 38000, hobby: ["chess", "painting"], city: "Delhi", post: "Scientist" },
];

const viewRecord = () => {

    let tbl = "";

    detail.map((val, index) => {

        tbl += `
                <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.email}</td>
                    <td>${val.gender}</td>
                    <td>${val.salary}</td>
                    <td>${val.hobby}</td>
                    <td>${val.city}</td>
                    <td>${val.post}</td>
                </tr>
        `;
    })

    document.getElementById('record').innerHTML = tbl;
}

viewRecord();

const city = () => {

    let city = document.getElementById('city').value;

    let tbl = "";
    let cityData = detail.filter((val, index) => val.city.includes(city));

    cityData.map((val, index) => {

        tbl += `
                <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.email}</td>
                    <td>${val.gender}</td>
                    <td>${val.salary}</td>
                    <td>${val.hobby}</td>
                    <td>${val.city}</td>
                    <td>${val.post}</td>
                </tr>
        `;
    })

    document.getElementById('record').innerHTML = tbl;

}

const reset = () => {
    viewRecord();
    document.getElementById('city').value = "";
}

const post = () => {
    let post = document.getElementById('post').value;

    let tbl = ``;
    let postData = detail.filter((val, index) => val.post == post);
    document.getElementById('post').value = "";

    postData.map((val, index) => {
        tbl += `
                <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.email}</td>
                    <td>${val.gender}</td>
                    <td>${val.salary}</td>
                    <td>${val.hobby}</td>
                    <td>${val.city}</td>
                    <td>${val.post}</td>
                </tr>
        `;
    })

    document.getElementById('record').innerHTML = tbl;
}

const gender = () => {
    let gender = document.getElementById('gender').value;

    let genderData = detail.filter((val, index) => val.gender == gender);
    document.getElementById('gender').value = "";

    let tbl = "";

    genderData.map((val, index) => {
        tbl += `
                <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.email}</td>
                    <td>${val.gender}</td>
                    <td>${val.salary}</td>
                    <td>${val.hobby}</td>
                    <td>${val.city}</td>
                    <td>${val.post}</td>
                </tr>
        `;
    })

    document.getElementById('record').innerHTML = tbl;
}

const salary = () => {
    let salary = document.getElementById('salary').value;
    let salary1 = document.getElementById('salary1').value;

    let salaryData = detail.filter((val, index) => val.salary >= salary && val.salary <= salary1);
    document.getElementById('salary').value = "";
    document.getElementById('salary1').value = "";

    let tbl = "";

    salaryData.map((val, index) => {
        tbl += `
                <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.email}</td>
                    <td>${val.gender}</td>
                    <td>${val.salary}</td>
                    <td>${val.hobby}</td>
                    <td>${val.city}</td>
                    <td>${val.post}</td>
                </tr>
        `;
    })

    document.getElementById('record').innerHTML = tbl;
}

const hobby = () => {
    let hobby = document.getElementById('hobby').value;

    let tbl = "";
    let hobbyData = detail.filter((val, index) => val.hobby.includes(hobby));

    document.getElementById('hobby').value = "";

    hobbyData.map((val, index) => {

        tbl += `
                <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.email}</td>
                    <td>${val.gender}</td>
                    <td>${val.salary}</td>
                    <td>${val.hobby}</td>
                    <td>${val.city}</td>
                    <td>${val.post}</td>
                </tr>
            `;
    })

    document.getElementById('record').innerHTML = tbl;
}