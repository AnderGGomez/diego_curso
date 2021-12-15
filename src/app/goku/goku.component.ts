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
  public saludoGohan:string | undefined;
  public saludoGoten:string | undefined;

  public toqueOfGohan:string | undefined;
  public toqueOfGoten:string | undefined;

  public mensajeGohan(): void{
    this.saludoGohan = "Hola gohan";
  }

  public mensajeGoten(): void{
    this.saludoGoten = "Hola goten";
  }

  public verToqueGohan($event: string):void{
    this.toqueOfGohan=$event;
  }

  public verToqueGoten($event: string):void{
    this.toqueOfGohan=$event;
  }
}
