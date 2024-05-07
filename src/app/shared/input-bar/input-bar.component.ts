import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputBarComponent),
      multi: true
    }
  ]
})
export class InputBarComponent implements ControlValueAccessor {
  @Input() placeholder: string | undefined;
  value: string | undefined;
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInputChange(event: any) {
    this.onChange(event.target.value);
  }
  
}