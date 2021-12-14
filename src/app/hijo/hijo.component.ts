import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor() { }
  /**
   * variables vacias | undefined
   * @Input Selector
   */
  //@Input() recibido:string | undefined;

  //@Input() recibido: Array<any> | undefined;
  //@Input() recibido: string | undefined;
  @Input() recibido: Array<Usuario> | undefined;
  @Input() recibidoTwo: Array<number> = new Array();
  
  /** Para emitir del hijo al padre se hace uso de eventos */
  @Output() enviarPapa = new EventEmitter<string>();
  @Output() enviarInfo = new EventEmitter<string>();
  ngOnInit(): void {
  }

  enviar():void{
    this.enviarPapa.emit("Nooo!")
  }

  enviarRespuesta():void{
    let respuesta = this.recibidoTwo[0]+this.recibidoTwo[1];
    this.enviarInfo.emit(String(respuesta));
  }
}
