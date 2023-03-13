import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
tasks:{title:string;completed:boolean;}[]=
[
  {title: "Tender la cama",completed:false},
  {title: "Deberes",completed:false},
  {title: "Tender la cama",completed:false}
]
newTask='';
  constructor() {}
addTask(){
  if (this.newTask.trim().length===0){
    return;
  }
  this.tasks.push({title:this.newTask, completed:false});
  this.newTask='';
}
deleteTask(task:{title: string; completed:boolean;}){
  const index =this.tasks.indexOf(task);
  this.tasks.splice(index,1);
}
getProgress(){
  const totalTask = this.tasks.length;
}
}
