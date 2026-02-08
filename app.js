/*
let ar = [

    {
        name: "bhau",
        marks: 95,
    },
    {
        name: "navin",
        marks: 99,
    },
    {
        name: "nitin",
        marks: 88,
    }
];

ar.forEach((element) => {
    console.log(element.name);

});






const arr = [1, 3, 2, 4, 5, 6];

let squre = arr.map((el) => {
    return el * el;
});
console.log(squre);

let inc = arr.map((el) => {
    return el + 5;
});

let string = ["bhau", "mahesh", "bhaurao", "tukaram", "sakharam", "kirti"];
let uparCase = string.map((e) => {
    return e.toUpperCase();
});
console.log(uparCase);

let para = document.createElement('P');
para.innerText = "Hey I am Red!";

document.querySelector("body").append(para);
para.classList.add("red")

let h3 = document.createElement("h3");
h3.innerText = " I'm blue! "; // here add text inside the h3 
h3.classList.add("blue");  //h3 styling gives
document.body.append(h3); //document.querySeclector("body").append(h30);

// create a div here
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I am in div";
para2.innerText = "Me Too";

div.append(h1);
div.append(para2);

div.classList.add("box");
document.querySelector("body").append(div);



let btn = document.createElement("button");
btn.innerText = "Click me!";
btn.classList.add("btn");
document.querySelector("div").prepend(btn);



let button = document.createElement("button");
button.innerText = "click me!";
button.classList.add("brn");
document.querySelector("body").append(button);


let h11 = document.createElement("h1");
h11.innerText = "DOM practice";
h11.classList.add("h1");
document.querySelector("div").append(h11);


let para3 = document.createElement("p");
para3.innerHTML = "apna college <b>Delta</b> Practice";
document.querySelector("div").insertAdjacentElement("beforebegin", para3);




let b = document.querySelector("button");

b.addEventListener("click", trigger);

function trigger() {
    let h3 = document.querySelector("h3");
    let randomColor = getrandoncolor();
    h3.innerText = randomColor;

    let div = document.querySelector(".backcolor");
    div.style.backgroundColor = randomColor;
    console.log("color changed");


}


function getrandoncolor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb( ${red}, ${green}, ${blue})`;
    return color;
}




let inp = document.querySelector("input");
inp.addEventListener("keydown", function (e) {
    console.log("key =", e.key);
    console.log("code =", e.code);
    console.log("key was press");
});



let input = document.querySelector("#input");
console.log(input);
input.addEventListener("scroll", mouseout, hello);
function mouseout() {
    console.log("mouse in out from input");
};
function hello() {
    console.dir(this);
}


document.addEventListener("keypress", function (f) {
    console.log("Key pressed:", f.key)
});
window.addEventListener("scroll", function () {
    console.log("Page is scrolling");
});


let butto = document.createElement("button");
butto.innerText = "mala click me!";
butto.classList.add("button");
document.body.append(butto);
butto.addEventListener("click", clickedfn);
function clickedfn() {
    console.log("button was clicked");

}




let inp = document.querySelector("#todoin");
let btn = document.querySelector("#todobtn");
let ul = document.querySelector("#todoList");


btn.addEventListener("click", function(){
    let item = document.createElement("li");

  if(inp.valie === ""){
    item.innerText= inp.value;
    ul.appendChild(item);
    inp.value="";
}
});

btn.addEventListener("click", function () {
    let item = document.createElement("li");


    if (inp.value.trim() !== "") {
        item.innerText = inp.value;
        ul.appendChild(item);
        inp.value = "";
    }

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
   item.appendChild(delbtn);

});


let delbtns = document.createElement("button");
    delbtns.innerText = "Delete";
    delbtns.classList.add("delete");
    item.appendChild(delbtns);

delbtns.addEventListener("click", function () {
    item.remove();
});





btn.addEventListener("click", function () {

    if (inp.value.trim() === "") {
        return;
    }

    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");

    // delete logic
    delbtn.addEventListener("click", function () {
        item.remove();
    });

    item.appendChild(delbtn);
    ul.appendChild(item);

    inp.value = "";
});




let inp = document.querySelector("#todoin");
let btn = document.querySelector("#todobtn");
let ul = document.querySelector("#todoList");

btn.addEventListener("click", function () {

    let item = document.createElement("li");

    if (inp.value.trim() !== "") {
        item.innerText = inp.value;

        let delbtn = document.createElement("button");
        delbtn.innerText = "Delete";
        delbtn.classList.add("delete");

        // delete logic
        delbtn.addEventListener("click", function () {
            item.remove();
        });

        item.appendChild(delbtn);
        ul.appendChild(item);
        inp.value = "";
    }

});
let arr = ["bhau", "rao", "japan", [{ name: "bhaurao" }], 55, 66, ["bmw"], ["chikan65"]];
for (let i = arr.length; i>=0; i--) {
console.log(arr[i]);
}




let inp = document.querySelector("#todoinp");
let ul = document.querySelector("#todolist");
let addbtn = document.querySelector("#todobtn");

addbtn.addEventListener("click", function () {
    if (inp.value.trim()===""){
        alert("Please enter a task");
        return;
    }
    let item = document.createElement("li");
    item.innerText = inp.value;
    // console.log(item.offsetWidth);

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";
    inp.focus();
    // inp.blur();
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName === "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("list item is deleted")
    }
});

*/


// function hello(){
//     console.log("inside in fun");
//     console.log("Hello");
// }
// function demo(){
//     console.log("calling hello fun");
//     hello();
// }

//  console.log("caling demo fun ");
// demo;
// console.log("bey bey done");







// function saveData(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();

//     } else {
//         failure();
//     }
// };


// saveData(
//     "hello may name is bhau",
//     () => {
//         console.log("this is success calling");
//         saveData("data", () => {
//             console.log("data is save for 2nd ");
//             saveData("data we gdet from user", () => {
//                 console.log("data successfully saved");
//             },
//                 () => {
//                     console.log("data not daved 2nd")
//                 })
//         },
//             () => {
//                 console.log("this is fuilure 2nd");
//             }
//         )
//     },
//     () => {
//         console.log("this is the failure calling");

//     }
// );



// function saveData(data) {
//     return new Promise((resolve, reject) => {
//         let randomdata = Math.floor(Math.random() * 10) + 1;
//         if (randomdata > 4) {
//             resolve("success: data was saved");  // result 
//          }else {
//             reject("failure : data is not saved");  // error
//             }
//     });
// }

// let p = saveData("i am here ok")
// .then((result)=>{
//     console.log("data 1st is save");
//     console.log("success full data is saved =>", result);
//    return saveData("india is a country");
// })
// .then((result)=>{
// console.log("success 2nd data is saved");
// console.log("Success data is daved =>", result);
//  return saveData("Red t shart is good ");
// })
// .then((result)=>{
//     console.log("data 3rd is saved");
//     console.log("Success ful data is saved =>", result);
// })
// .catch((er)=>{
//     console.log("Rejected : data id not saved =>", er);
// })

// console.log(p);



// let form = document.querySelector("#myForm");

// let val = document.querySelector("#textInput");
// console.log(val.value);
// console.dir(val);

// let output = document.getElementById("output").innerText = val;

// form.addEventListener("submit",function(e){
//     e.preventDefault();

// });

// let form = document.querySelector("#myForm");
// let arr = [];
// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     let val = document.querySelector("#textInput").value;
//     arr.push(val);

//     console.log(val);

//     document.getElementById("output").innerText = val;

// });


// let form = document.querySelector("myForm");
// let arr = [];
// let a = "bhaurao"
// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let input = document.querySelector("textInput");

//   let val = input.value;

//   if (val.trim() === "") return;

//   // optional: avoid empty input

//   arr.push(val);
//   console.log(arr);

//   document.getElementById("output").innerText = arr.join(", ");

//   input.value = ""; // ✅ clears text input
// });




// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((re) => { 
//         console.log(re);
//          re.json().then((data)=>{
//             console.log(data);
//          })
//          })
//     .catch((er) => { 
//         console.log(er);
//      })

// let url = "https://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async (e) => {
//   e.preventDefault();

//   let country = document.querySelector("input").value.trim();
//   console.log("Input:", country);

//   let colArr = await getColleges(country);
//   console.log("Response:", colArr);

//   show(colArr);
// });

// function show(colArr) {
//   let list = document.querySelector("#list");
//   list.innerHTML = "";

//   for (let col of colArr) {
//     let li = document.createElement("li");
//     li.innerText = col.name;
//     list.appendChild(li);
//   }
// }

// async function getColleges(country) {
//   try {
//     let res = await axios.get(url + country);
//     return res.data;
//   } catch (e) {
//     console.log("error:", e);
//     return [];
//   }
// }



// let url = "http://universities.hipolabs.com/search?name=";-------------------this is working code for geting colleges in world
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     console.log(country);
//     let colArr = await getColleges(country);

//     show(colArr);
// });

// function show(colArr) {
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for (let col of colArr) {
//         console.log(col.name);

//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }


// async function getColleges(country) {
//     try {
//         let res = await axios.get(url + country);
//         return res.data;


//     }
//     catch (e) {
//         console.log("error : ", e);
//         return [];

//     }
// }





// let url = "https://universities.hipolabs.com/search?country=India";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let state = document.querySelector("#input").value.toLowerCase();
//     let colleges = await getColleges();


//     let filteredColleges = filterByState(colleges, state);
//     show(filteredColleges);
// });

// async function getColleges() {
//     try {
//         let res = await axios.get(url);
//         return res.data;
//     } catch (e) {
//         console.log("error:", e);
//         return [];
//     }
// }

// function filterByState(colArr, state) {
//     return colArr.filter(col =>
//         col.name.toLowerCase().includes(state) ||
//         col.domains.join(" ").toLowerCase().includes(state)
//     );
// }

// function show(colArr) {
//     let list = document.querySelector("#list");
//     list.innerHTML = "";

//     if (colArr.length === 0) {
//         list.innerHTML = "<li>No colleges found</li>";
//         return;
//     }

//     for (let col of colArr) {
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }
