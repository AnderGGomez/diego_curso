import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-goten',
  templateUrl: './goten.component.html',
  styleUrls: ['./goten.component.css']
})
export class GotenComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
  }

  @Input() mensajeOfGoku  : string | undefined;
  @Input() mensajeOfGohan : string | undefined;

  @Output() mensajeGotenGoku  = new EventEmitter<string>();
  @Output() mensajeGotenGohan = new EventEmitter<string>();

  mensajeToGoku(msg: string):void{
    this.mensajeGotenGoku.emit(msg);
  }

  mensajeToGohan(msg: string): void {
    this.mensajeGotenGohan.emit(msg);
  }

}
