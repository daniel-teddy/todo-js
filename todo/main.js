let floating_btn =document.querySelector('#floating_btn');
let hide_menu =document.querySelector('#hide_menu');
let add_todo =document.querySelector('#add_todo');
let default_text =document.querySelector('#default_text');
let clear_text_box =document.querySelector('#clear_text_box');
let floating_menu =document.querySelector('.floating_menu');



/*btn clicks*/
floating_btn.addEventListener('click', function(){	
    floating_menu.classList.toggle('floating_menu_active');
});
        
hide_menu.addEventListener('click', function(){	
    floating_menu.classList.toggle('floating_menu_active');
});


/*todo*/
let display_task =document.querySelector('.display_task');
let total_task =document.querySelector('#total_task');
let list =document.querySelectorAll('.display_task .task');
let form =document.querySelector('.form');

var task_length = list.length;

/*clear text btn click*/
clear_text_box.addEventListener('click', function(e){ 
  e.preventDefault();
  form.task_title.value = '';
  form.task_description.value = '';
});


/*add todo btn click*/
add_todo.addEventListener('click', function(e){
   e.preventDefault();
   const todo_title = form.task_title.value.trim();
   const todo_description = form.task_description.value.trim();
    if (todo_title.length && todo_description.length){
 		task_length = task_length + 1;
    total_task.innerHTML = "<i class='bx bx-task'></i> " + task_length;
 		generateTodo(todo_title,todo_description);
 		Form.reset();
 	}else{
 		alert("Sorry, you didn't type anything.");
 	}
});


/*generate Todo*/
const generateTodo = (todo_title,todo_description) => {
    const html = `<div class="task" id="todo_ ${task_length}">
				<h2>${todo_title}</h2>
				<p>${todo_description}</p>
				<span class="delete_todo">x</span>
			</div>`;
      if (task_length > 0) {
         default_text.style.opacity = '0';
      }
 	    display_task.innerHTML += html;
      floating_menu.classList.toggle('floating_menu_active');
};

/*delete todo btn click*/
display_task.addEventListener("click" , function(e){
  if(e.target.classList.contains("delete_todo")){
    e.target.parentElement.remove();
    task_length = task_length - 1;
    if (task_length==0) {
       default_text.style.opacity = '1';
    }
    total_task.innerHTML = "<i class='bx bx-task'></i> " + task_length;
  }
});
