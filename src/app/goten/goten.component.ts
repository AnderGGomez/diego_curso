import { Component, Input, OnInit } from '@angular/core';

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



}
