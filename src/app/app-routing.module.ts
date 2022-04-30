import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskDialogComponent } from './dialogs/add-task-dialog/add-task-dialog.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { BoardComponent } from './pages/board/board.component';
import { ColumnComponent } from './pages/board/column/column.component';

const routes: Routes = [
  {
    path:"",
    component: MainLayoutComponent,
    children:[
      {
        path:"" , component:BoardComponent
      },
      {
        path:"add/:id" , component:BoardComponent
      },
      {
        path:"edit/:id1/:id2" , component:BoardComponent
      }
    ]
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
