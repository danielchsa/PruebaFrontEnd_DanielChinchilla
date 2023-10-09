import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() name: string = 'Button';
  @Input() type: string = 'button';
  @Input() primary: boolean = false;
}
