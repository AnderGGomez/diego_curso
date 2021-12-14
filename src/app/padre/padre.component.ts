import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  /**
   * modulos de diseño
   * primeng
   * boostrap
   * angularmaterial
   */
  constructor() { }

  //public mensajeHijo: string = "Esto es un mensaje";
  //public mensajeHijo: Array<any> = ["hola", 2]; 
  //public mensajeHijo: string | undefined;

  public mensajeHijo: Array<Usuario> = new Array();
  public data: Array<number> = new Array();
  
  public saludo:string | undefined;
  public informacion:string | undefined;

  //public persona: Usuario = new Usuario() use esto con ngModel;

  formUser = new FormGroup({
                            id:       new FormControl('', Validators.required), 
                            name:     new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
                            lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
                            state:    new FormControl('', [Validators.required, Validators.maxLength(1)])
                          })
  


  enviarMensaje():void{
    this.mensajeHijo=[
      {id:1, name:"ander", lastname:"gomez", state:true},
      {id:2, name:"pan", lastname:"cardona", state:false},
      {id:3, name:"pin", lastname:"fin", state:false}
    ]
    //this.mensajeHijo="Eres adoptado";
  }

  enviarData():void{
    this.data=[9,8];
  }

  recibirSaludo($event:any){
    this.saludo = $event;
  }

  recibirInfo($event:any){
    this.informacion = $event;
  }

  /*mostrarDatos():void{
    console.log(this.persona)
  }*/

  showUser():void{
    //console.log(this.formUser.get("name")?.value)
    console.log(this.formUser)
  }
  ngOnInit(): void {
  }

}
