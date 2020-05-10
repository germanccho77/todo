import { Todo } from "./todo.class";


export class TodoList {

    constructor (){
       // this.todos = [];
       this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }
    eliminarTodo(id){
        this.todos = this.todos.filter (todo => todo.id != id) // Devuelve un nuevo arreglo excluyendo el id que yo le paso
        this.guardarLocalStorage();
    }

    marcarCompletado(id){
        for (const todo of this.todos){
            console.log(id, todo.id);
            if (todo.id === id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletados(){
        this.todos = this.todos.filter (todo => !todo.completado)  // El filtro devuelve todos los que no esten completados.
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){

   //    if (localStorage.getItem('todo')){

   //        this.todos = JSON.parse(localStorage.getItem('todo');
   //        console.log('cargarLocal: ', this.todos);

   //    }else {
   //        this.todo = [];
   //    }
   this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [];
        
   this.todos = this.todos.map(obj => Todo.fromJson(obj));
   
}

}