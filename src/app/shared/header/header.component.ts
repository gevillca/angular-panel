import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // @Input() isCollapsed: boolean;
  // @Output() cambioo = new EventEmitter();
  constructor(public sharedService: SharedService) {}
  isCollapsed = false;
  ngOnInit(): void {
    this.isCollapsed = false;
    // this.cambioo.emit(this.isCollapsed);
  }
  ocultarMenu() {
    this.isCollapsed = true;
    this.sharedService.isCollapsed = this.isCollapsed;
  }
}
