let Todo = []
let todo
let counter = 0
function addTodo(event){
  todo = event.target.value
}

function submitTodo(){
  if(!todo){
    return;
  }
  Todo.push({
    text: todo,
    id: counter++
  })
  RenderTodo()
  todo = ""
  document.querySelector('.input').value = ""
}

function deleteTodo(id){
  Todo = Todo.filter(todo => todo.id !== id)  
  RenderTodo()
}
function RenderTodo(){
  const TodoHTML = Todo.map(todo =>
    `<li>
    ${todo.text}
    <button class="todo__delete" onclick="deleteTodo(${todo.id})">
      x
    </button>
  </li>`)
  document.querySelector(".list").innerHTML = TodoHTML
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    submitTodo();
  }
});