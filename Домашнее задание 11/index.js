const header = document.createElement("header");
header.classList.add("header");
header.textContent="To Do List";
document.body.prepend(header);

const container = document.createElement("div");
container.classList.add("container");
container.innerHTML="Список дел на вечер";
document.body.appendChild(container);


const input = document.createElement('input');
input.classList.add("main_input");
input.placeholder="Введите текст";
document.body.appendChild(input);

const button = document.createElement("button");
button.classList.add("green_button");
button.innerText="Отправить";
document.body.appendChild(button);

const toDoList = document.createElement("ul");
toDoList.classList.add("list");
document.body.appendChild(toDoList);

const li_= document.createElement("li");
li_.classList.add("main_li");
li_.innerText="Купить батон";
toDoList.appendChild(li_);

let inputValue = "";
input.addEventListener("input", function(event) {
inputValue = event.target.value;
console.log("Добавить", inputValue);
});

const addList = function addTask() {
    const newTask = inputValue.trim();
    if (newTask.length === 0) {
        alert("Добавьте задание");
        return;
    }
    const newLi = document.createElement("li");
    newLi.classList.add("main_li");
    newLi.textContent = newTask;
    toDoList.appendChild(newLi);

// это выводит массив и добавляет новые значения в него
    let tasks = JSON.parse(localStorage.getItem("Дела на вечер")) || []; 
    tasks.push(newTask);
    localStorage.setItem("Дела на вечер", JSON.stringify(tasks));

    input.value = "";
    inputValue = "";
   
   
};

button.addEventListener("click", addList);
input.addEventListener("keyup", (event) =>{
    if(event.key==="Enter") {
        addList();
    }
}
);
toDoList.addEventListener("click", (event)=>{
    event.target.style.color="brown";
    event.target.style.textDecoration="line-through";

})


