function todoList(todos) {
  // Write your code here...
//   const content = document.querySelector('content');
//   const ul = document.createElement('ul');
//   document.body.appendChild(ul);
//   todos.forEach(list =>{
//     const li = document.createElement('li');
//     liEls.innerText = list.todo;
//     ul.appendChild(liEls);
//     li.style.textDecoration ='none';
//     li.addEventListener('click', ()=> {
//       if(li.style.textDecoration === 'none'){
//         li.style.textDecoration = 'line-through';
//       } else {
//         li.style.textDecoration = 'none';
//       } 
//     });
//   });

// }

let content = document.getElementById("content");
let ul = document.createElement("ul");
content.appendChild(ul);

todos.forEach((element) => {
  let li = document.createElement("li");
  li.textContent = element.todo;
  ul.appendChild(li);
});
document.getElementsByTagName("ul")[0].addEventListener("click", function (event) {
  // console.log(event.target);
  if (event.target && event.target.matches("li")) {
    if (
      event.target.getAttribute("style") === null ||
      event.target.getAttribute("style") === ""
    ) {
      event.target.style.textDecoration = "line-through";
    } else {
      event.target.style.textDecoration = "";
    }
  }
});
}


const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);