import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Column } from 'src/app/models/column.model';
import {MatDialog} from '@angular/material/dialog';
import { EditTaskDialogComponent } from 'src/app/dialogs/edit-task-dialog/edit-task-dialog.component';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() tasks?: string[];
  @Input() columnIndex?: number;
  @Output() deleteSelectedTask:EventEmitter<any> = new EventEmitter<any>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openEditTaskDialog(task:string) {
    const dialogRef = this.dialog.open(EditTaskDialogComponent, {
      data:{
        columnTobeUpdated:this.columnIndex,
        taskTobeUpdated:task
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteTask(i:number){
    this.deleteSelectedTask.emit(i);
  }
}
