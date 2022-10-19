import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-module-header',
  templateUrl: './my-module-header.component.html',
  styleUrls: ['./my-module-header.component.css'],
})
export class MyModuleHeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  userName = '';
}
