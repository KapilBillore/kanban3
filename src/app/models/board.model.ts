import { Column } from "./column.model";

export class Board{

  public name:string;
  public columns:Column[];

  constructor(name: string, columns:Column[] ) {
    this.name=name;
    this.columns=columns;
  }
}
