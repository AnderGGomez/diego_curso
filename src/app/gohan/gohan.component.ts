import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

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
  @Output() toquePadre = new EventEmitter();

}
