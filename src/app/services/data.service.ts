import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  board:Board = new Board("Administration",[
    new Column("Accounts", ["Do Audit", "Check transactions"]),
    new Column("HR", ["interviews", "salary"]),
    new Column("Clients",["get invoice"]),
    new Column("Revenue",["Calculate"]),

  ])

  key:string='dataSource'
  constructor() {
    localStorage.setItem(this.key,JSON.stringify(this.board));
  }

  getBoards():Board{
    return this.board;

  }

  deleteColumn(i:number){
    this.board.columns.splice(i,1);
  }

  deleteTask(itask:number, icol:number){
    this.board.columns[icol].tasks.splice(itask,1);
  }

  addTask(columnName:string, task:string){
    let index = this.board.columns.findIndex((item) => item.name === columnName);
    this.board.columns[index].tasks.push(task);
  }

  editTask(columnIndex:number,taskTobeUpdated:string, updatedValue:string){
    let index=this.board.columns[columnIndex].tasks.findIndex(item=> item=taskTobeUpdated);
    this.board.columns[columnIndex].tasks[index]=updatedValue;
  }
}
