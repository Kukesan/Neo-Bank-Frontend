import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.css']
})
export class InputBarComponent implements OnInit {
  @Input() placeholder: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
