import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lsbutton',
  templateUrl: './lsbutton.component.html',
  styleUrls: ['./lsbutton.component.css'],
})
export class LSButtonComponent {
  @Input()
  text!: string;
  @Input()
  color!: string;
  @Input()
  className!: string;
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
