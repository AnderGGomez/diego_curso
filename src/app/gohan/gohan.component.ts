import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gohan',
  templateUrl: './gohan.component.html',
  styleUrls: ['./gohan.component.css']
})
export class GohanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() mensajeOfGoku:string | undefined;
  @Input() mensajeOfGoten:string | undefined;
  @Output() mensajeGohanGoku = new EventEmitter<string>();
  @Output() mensajeGohanGoten = new EventEmitter<string>();


  mensajeToGoku(msg: string):void{
    this.mensajeGohanGoku.emit(msg);
  }

  mensajeToGoten(msg: string):void{
    this.mensajeGohanGoten.emit(msg);
  }


}
