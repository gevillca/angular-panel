import { SharedService } from './../../services/shared.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  // @Input('isCollapsed')
  isCollapsed: boolean;
  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {}
  ocultarMenu() {
    this.isCollapsed = this.sharedService.isCollapsed;
  }
}
