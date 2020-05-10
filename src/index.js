import './styles.css';
//import {Todo} from './class/todo.class.js';
//import {TodoList} from './class/todo-list.class.js';
import {Todo, TodoList} from './class';
import { crearTodoHTML } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach(todo => crearTodoHTML (todo));
todoList.todos.forEach(crearTodoHTML); // funciona igual

const newTodo = new Todo('Aprender JS');
// todoList.nuevoTodo(newTodo);
todoList.todos[0].imprimirClase();
//newTodo.imprimirClase();

console.log('todos', todoList.todos);