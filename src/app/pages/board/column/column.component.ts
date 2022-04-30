import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Column } from 'src/app/models/column.model';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
import { AddTaskDialogComponent } from 'src/app/dialogs/add-task-dialog/add-task-dialog.component';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input() columns?: Column[];
  @Output() deleteSelectedColumn: EventEmitter<any> = new EventEmitter();
  @Output() deleteSelectedTask: EventEmitter<any> = new EventEmitter();


  constructor(public dialog: MatDialog,
              private dataService: DataService,
              private router: Router,
              private route :ActivatedRoute) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  openAddTaskDialog(columnName:string) {
    const dialogRef = this.dialog.open(AddTaskDialogComponent,{
      data:columnName
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  deleteColumn(i:number){
    this.deleteSelectedColumn.emit(i);
  }

  deleteTask(itask:number, icol:number){
    this.deleteSelectedTask.emit({itask:itask,icol:icol});
  }
}
