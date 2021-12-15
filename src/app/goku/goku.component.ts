import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goku',
  templateUrl: './goku.component.html',
  styleUrls: ['./goku.component.css']
})
export class GokuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public mensajeGokuGohan:string | undefined;
  public mensajeGokuGoten:string | undefined;

  public msgOfGohan:  string | undefined;
  public msgOfGoten:  string | undefined;
  public msgForGoten: string | undefined;
  public msgForGohan: string | undefined;

  enviarMensajeGohan():void{
    this.mensajeGokuGohan="hola gohan";
  }

  enviarMensajeGoten():void{
    this.mensajeGokuGoten="hola goten";
  }

  mensajeOfGohan($event: string): void{
    this.msgOfGohan=$event;
  }

  mensajeOfGoten($event: string): void{
    this.msgOfGoten=$event;
  }

  mensajeForGoten($event: string): void{
    this.msgForGoten=$event;
  }

  mensajeForGohan($event: string): void{
    this.msgForGohan = $event;
  }

}
