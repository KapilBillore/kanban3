import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.css']
})
export class EditTaskDialogComponent implements OnInit {

  editTaskForm = new FormGroup({
    task: new FormControl(this.data.taskTobeUpdated, [Validators.required])
  });

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data:{
    columnTobeUpdated:number,
    taskTobeUpdated:string
  },
  private dataService: DataService,
  public dialogRef: MatDialogRef<EditTaskDialogComponent>,
  private route: Router) { }

  ngOnInit(): void {
  }

  editTask(){
    this.dataService.editTask(this.data.columnTobeUpdated,this.data.taskTobeUpdated, this.editTaskForm.get('task')?.value);
    this.route.navigateByUrl("/");
    this.dialogRef.close('Pizza!');

  }
}
