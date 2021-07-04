import { SharedService } from './../services/shared.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  // @Input('valor') isCollapsed = false;
  isCollapsed = false;
  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.isCollapsed = this.isCollapsed;
  }
}
