import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board?: Board;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.board=this.dataService.getBoards();
  }

  deleteColumn(i:number){
    this.dataService.deleteColumn(i);
  }

  deleteTask(data:any){
    this.dataService.deleteTask(data.itask, data.icol);
  }

}
