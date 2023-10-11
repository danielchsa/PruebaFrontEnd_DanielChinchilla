import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() title: string = 'Modal';
  @Input() close: boolean = false;

  @Output() handleModal: EventEmitter<boolean> = new EventEmitter();
  openModal: boolean = false;
  constructor() {}

  confirmAction() {
    this.handleModal.emit(true);
    this.openModal = false;
  }
  cancelAction() {
    this.handleModal.emit(false);
    this.openModal = false;
  }
  open() {
    this.openModal = true;
  }
}
