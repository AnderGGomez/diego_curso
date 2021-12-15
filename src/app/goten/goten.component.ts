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

  @Input() mensajePadre: string | undefined;
  @Output() toquePadre = new EventEmitter<string>();

  public enviarToque(msg: string):void{
    this.toquePadre.emit(msg);
    console.log(msg);
  }

}
