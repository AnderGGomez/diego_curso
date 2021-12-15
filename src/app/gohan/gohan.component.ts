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

  @Input() mensajePadre : string | undefined;
  @Output() toquePadre = new EventEmitter<string>();

  public enviarToque(msg: string):void{
    this.toquePadre.emit(msg);
    console.log(msg);
  }

}
