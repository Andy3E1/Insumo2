import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Task } from 'src/app/Model/task';

const TASKS_KEY = 'tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor(private storage: Storage) {
    this.loadTasksFromStorage();
  }

  private async loadTasksFromStorage() {
    const tasks = await this.storage.get(TASKS_KEY);
    if (tasks) {
      this.tasks = tasks;
    }
  }

  getTasks() {
    return this.tasks;
  }

  private saveTasksToStorage() {
    this.storage.set(TASKS_KEY, this.tasks);
  }

  getIndexbyId(id: number) {
    const index = this.tasks.findIndex(i => i.id === id);
    if (index === -1) throw new Error("Task not found");
    return index;
  }

  create(titulo: string): Task {
    if (!titulo || titulo.trim().length === 0)
      throw new Error("Ingrese datos solicitados");
    return new Task(this.tasks.length, titulo);
  }

  add(task: Task) {
    this.tasks.push(task);
    this.saveTasksToStorage();
  }
  

  edit(task: Task) {
    try {
      const index = this.getIndexbyId(task.id);
      this.tasks.splice(index, 1, task);
      this.saveTasksToStorage();
    } catch (error: any) {
      throw error.message;
    }
    
  }
}

