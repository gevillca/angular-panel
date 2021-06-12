import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() isCollapsed: boolean;
  @Output() cambioo = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.isCollapsed = false;
    this.cambioo.emit(this.isCollapsed);
  }
}
