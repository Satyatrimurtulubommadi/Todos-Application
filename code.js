let todoItemsContainer=document.getElementById('todoItemsContainer');
let addTodoButton=document.getElementById('addTodoButton')
let todoList=[
  {
    todo1:"LearnHtml",
    uniqueNo:1
  },
  {
    todo1:"LearnCss",
    uniqueNo:2
  },
  {
    todo1:"LearnJavascprit",
    uniqueNo:3
  }


];
let todosCount = todoList.length;
function onTodoStatusChange(checkBoxId,labelId){
  let checkboxElement=document.getElementById(checkBoxId)
  
  let labelElement=document.getElementById(labelId)
  labelElement.classList.toggle("checked")
}

function delectTodoItem(todoId){
  let todoElement=document.getElementById(todoId);
  todoItemsContainer.removeChild(todoElement)

}

function todoAndAppendTodo(todo){
  let checkBoxId='checkBoxId'+todo.uniqueNo
  let labelId='labelId'+todo.uniqueNo
  let todoId="todoId"+todo.uniqueNo
  let listEl=document.createElement('li');
  listEl.id=todoId
  listEl.classList.add('todo-item-container','d-flex','flex-row');
 
  todoItemsContainer.appendChild(listEl);

  let inputEl=document.createElement('input');
  inputEl.type='checkbox'
  inputEl.id= checkBoxId
  inputEl.onclick=function(){
    onTodoStatusChange(checkBoxId,labelId)
  };
  inputEl.classList.add("checkbox-input")
  listEl.appendChild(inputEl);
  
  let labelContainerEl=document.createElement('div')
  labelContainerEl.classList.add('label-container','d-flex','flex-row')
  listEl.appendChild(labelContainerEl);


  let labelEl=document.createElement('label')
  
  labelEl.setAttribute('for', checkBoxId)
  labelEl.id=labelId
  
  labelEl.classList.add('checkbox-label')
  
  
  labelEl.textContent=todo.todo1
  
  labelContainerEl.appendChild(labelEl);

  let delectContainerEl=document.createElement("div")
  delectContainerEl.classList.add('delete-icon-container')
  labelContainerEl.appendChild(delectContainerEl);

  let deleteEl=document.createElement('i')
  deleteEl.classList.add("far", "fa-trash-alt", "delete-icon")
  deleteEl.onclick=function(){
    delectTodoItem(todoId);
  };
  delectContainerEl.appendChild(deleteEl);

}
for (let todoEachItem of todoList){
  todoAndAppendTodo(todoEachItem)
}

function onAddTodo(){
  let todoUserInput=document.getElementById('todoUserInput')
  let todoUserInputValue=todoUserInput.value;
  if(todoUserInputValue===''){
    alert('enter valid input')
    return;
  }
  todosCount=todosCount+1;
  let newTodo={
    todo1:todoUserInputValue,
    uniqueNo:todosCount
  };
  todoAndAppendTodo(newTodo);
  todoUserInput.value = '';
};

addTodoButton.onclick=function(){
  onAddTodo();
};