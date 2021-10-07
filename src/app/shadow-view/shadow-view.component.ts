import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'shadow-view',
  templateUrl: './shadow-view.component.html',
  styleUrls: ['./shadow-view.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class ShadowViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
