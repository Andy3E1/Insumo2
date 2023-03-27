import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks:{title:string;completed:boolean;}[]=[];
  constructor() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }
  newTask='';
  addTask() {
    if (this.newTask.trim().length === 0) {
      return;
    }
    this.tasks.push({title: this.newTask, completed: false});
    this.saveTasks();
    this.newTask='';
  }

  deleteTask(task: { title: string; completed: boolean; }) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index,1);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getProgress() {
    const totalTasks = this.tasks.length;
    const completedTasks = this.tasks.filter(task => task.completed).length;
    return completedTasks / totalTasks;
  }
}
// Query for the toggle that is used to change between themes

/*tasks:{title:string;completed:boolean;}[]=
[
  {title: "Tender la cama",completed:false},
  {title: "Deberes",completed:false},
  {title: "Tender la cama",completed:false}
]
newTask='';
  constructor() {}
  addTask(){
    if(this.newTask.trim().length === 0){
      return;
    }
    this.tasks.push({title:this.newTask,completed:false});
    this.newTask='';

  }

  deleteTask(task: { title: string; completed: boolean; }){
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index,1);
  }

  getProgress() {
    const totalTasks = this.tasks.length;
    const completedTasks = this.tasks.filter(task => task.completed).length;
    return completedTasks / totalTasks;
  }
  
}
*/


/* constructor() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }
  newTask='';
  addTask() {
    if (this.newTask.trim().length === 0) {
      return;
    }
    this.tasks.push({title: this.newTask, completed: false});
    this.saveTasks();
    this.newTask='';
  }

  deleteTask(task: { title: string; completed: boolean; }) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index,1);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getProgress() {
    const totalTasks = this.tasks.length;
    const completedTasks = this.tasks.filter(task => task.completed).length;
    return completedTasks / totalTasks;
  }
} */