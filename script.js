var todoList = {
  todos: [],
  displayTodos: function() {
    // debugger; <!--To start debugger-->
    if (this.todos.length === 0) {
      console.log("Todos list is empty");
    } else {
      console.log('My Todos: ');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === false) {
          console.log('( ) ' + this.todos[i].todoText);
        } else {
          console.log('(x) ' + this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    //Toggle, if everything true, make everything false
    //get number of completed todos
    for(var i = 0; i < totalTodos; i++){
      if(this.todos[i].completed === true){
        completedTodos++;
      }
    }
    if(completedTodos === totalTodos){
      //Make everything false.
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
      }
    } else {
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = true;
      }      
    }
    this.displayTodos();
  }

};

// //1. we want to get access to display Todos button
// var displayTodosButton = document.getElementById('displayTodosButton');
// var toggleAllButton = document.getElementById('toggleAllButton');

// //2. we want to run displayTodos method, when someone clicks the display todos button
// displayTodosButton.addEventListener('click', function() {
//   todoList.displayTodos();
// });

// toggleAllButton.addEventListener('click', function() {
//   todoList.toggleAll();
// }); //refactoring

var handlers = { //object to handle onclick events
  //new method for displatTodos
  displayTodos: function() {
    todoList.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
  },
};



