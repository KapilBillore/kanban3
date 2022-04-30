import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.css']
})
export class AddTaskDialogComponent implements OnInit {

  addTaskForm = new FormGroup({
    task: new FormControl('', [Validators.required])
  });
  constructor(@Inject(MAT_DIALOG_DATA) public data: string, private dataService: DataService,
  public dialogRef: MatDialogRef<AddTaskDialogComponent>,
  private route : Router) { }

  ngOnInit(): void {
  }

  addTask(){
    this.dataService.addTask(this.data, this.addTaskForm.get('task')?.value);
    this.route.navigateByUrl("/");
    this.dialogRef.close('Pizza!');

  }

}
