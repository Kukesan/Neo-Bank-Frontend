import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-long-button',
  templateUrl: './long-button.component.html',
  styleUrls: ['./long-button.component.css']
})
export class LongButtonComponent implements OnInit {
  @Input() buttonTitle: string | undefined;
  @Input() logoSrc: string | undefined;
  @Input() bgColor: string | "black" | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
