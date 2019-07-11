// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

/*
USED FOR TESTING
var todos = [
  {id: 0, description: 'make tea', done: true},
  {id: 1, description: 'make eggs', done: true},
  {id: 2, description: 'make coffee', done: false},
  {id: 3, description: 'make bacon', done: true},
]
var newTodo = { description: 'make smoothie' };
// var updatedTodos = addTodo(todos, newTodo);
var idToMark =  2;
*/

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo){
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {
      var newTodos = todoFunctions.cloneArrayOfObjects(todos)
      newTodos.push({
        description: document.getElementsByName('description')[0].value,
        done: false,
        id: todoFunctions.generateId(),
      })
      return newTodos
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat
  },

  deleteTodo: function(todos, idToDelete) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter


},



    /*var crossTodo = document.getElementsByTagName("ul");
    var i;
    for (i = 0; i < crossTodo.length; i++) {
      // var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      // span.className = "close";
      span.appendChild(txt);
     // myNodelist[i].appendChild(span);
   },*/

  markTodo: function(todos, idToMark) {
    var newTodos = todoFunctions.cloneArrayOfObjects(todos);
    for (let item of newTodos) {
      if (item.id == idToMark) {
        if (item.done == false) {item.done = true}
        else if (item.done == true) {item.done = false}
      } else {
        continue;
      }
    }

    // todos.map(x => x.includes ? false : true)

    return newTodos;

    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map

  },


  sortTodos: function(todos, sortFunction) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
  },
};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}


// console.log(todoFunctions.markTodo(todos, idToMark))
