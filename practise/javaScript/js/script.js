// io
var my_name = prompt("input");

document.write("<h1>title test<h1>");
document.write("hello " + my_name + "\n");

// array
var diff = [20, "Joe", true];

// object
var person = {
    name: "joe",
    age: 20,
    is_male: true
};

document.write(person.name);

// class
class Phone {
    constructor(number, year, is_waterproof) {
        this.number = number;
        this.year = year;
        this.is_waterproof = is_waterproof;
    }

    phone_age() {
        return 2021 - this.year;
    }
}

var phone1 = new Phone("123", 2020, false);
var phone2 = new Phone("456", 2022, false);

document.write(phone1.number);
document.write(phone2.phone_age());

// get html
var h1 = document.getElementById("header");
h1.innerText = "new Text";

// event listener
// method1
function handle_click(element) {
    // alert("event listener");
    element.style.color = "red";
}

// method2
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    alert("method2");
    this.style.color = "red";
})
