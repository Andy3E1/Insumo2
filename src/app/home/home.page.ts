import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks:{title:string;completed:boolean;}[]=[];//una matriz de objetos que representa las tareas
  constructor() {
    const storedTasks = localStorage.getItem('tasks');// busca en el almacenamiento local un objeto que tenga la clave "tasks".
    if (storedTasks) {//Si se encuentra
      this.tasks = JSON.parse(storedTasks);// se utiliza para convertir los datos de tipo cadena almacenados en la clave "tasks" en un objeto de matriz JavaScript y se asigna el resultado a la propiedad tasks del componente.
    }
  }
  newTask='';// una cadena vacía que se utiliza para agregar una nueva tarea.
  addTask() {
    if (this.newTask.trim().length === 0) {//Verifica que la tarea no se encuentre en blanco
      return;//No se envia nada
    }
    this.tasks.push({title: this.newTask, completed: false});//agrega una nueva tarea a la matriz de tareas 
    this.saveTasks();// se llama inmediatamente para guardar la matriz actualizada de tareas en el almacenamiento local.
    this.newTask='';//Reestablece el new Task a una cadena vacia para volver a ingresar una nueva tarea
  }

  deleteTask(task: { title: string; completed: boolean; }) {//recibe task con los atributos title y si fue completada
    const index = this.tasks.indexOf(task);// Si el objeto task se encuentra en el array, index contendrá su índice. Si no se encuentra, index será -1.
    this.tasks.splice(index,1);
    this.saveTasks();//Guarda los cambios realizados en la lista de tareas en algún tipo de almacenamiento persistente, ya que llama al metodo privado savetasks
  }

  private saveTasks() {//indica que se está definiendo un método privado saveTasks que no es accesible desde fuera de la clase.
    localStorage.setItem('tasks', JSON.stringify(this.tasks));//se guarda en el localStorage
  }
  editTask(task: { title: string; completed: boolean; }) {//Se recibe task con los dso parametros establecidos
    const index = this.tasks.indexOf(task);//busca el índice del objeto task en el array this.tasks utilizando el método indexOf. Si el objeto task se encuentra en el array, index contendrá su índice. Si no se encuentra, index será -1.
    const newTitle = prompt('Ingrese el nuevo título de la tarea', task.title);//Muestra un mensaje en el navegador y deja un espacio para cambiar de titulo
    if (newTitle) {//comprueba si el usuario ingresó un nuevo título para la tarea
      this.tasks[index].title = newTitle;
      this.saveTasks();//Lo guarda nuevamente
    }}
    getProgress() {
      const totalTasks = this.tasks.length;//almacena el número total de tareas que hay
      const completedTasks = this.tasks.filter(task => task.completed).length;//lmacena el número de tareas completadas
      return completedTasks / totalTasks;//esta línea devuelve la proporción de tareas completadas en relación al número total de tareas.
    }
}
