

let obj = {
    name: "kumar",
    age: 24,
    native: "chennai"
}

//Call

function check() {
    return this.name;
}

console.log(check.call(obj));


// Apply

function check(job, salary) {
    return this.name + " " + job + " " + salary;
}

let arr = ["IT", 27000]
console.log(check.apply(obj, arr));

//Bind


function check() {
    return this.name;
}

let bound = check.bind(obj)
console.log(bound());

//Question no: 4

let student = {
    age: 20
}

function printage() {
    return this.age
}

console.log(printage.call(student))

//Currying

// method 1

let multiply = function () {

    console.log(2 * 5);

}

let print = multiply.bind(this);

print()

//method 2

let multiplyy = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplytwo = multiplyy(2);
multiplytwo(10);

let multiplythree = multiplyy(3);
multiplythree(1900);