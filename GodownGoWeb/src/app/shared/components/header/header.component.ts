import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'g-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() openPopup = new EventEmitter<void>();

  emitOpenPopup() {
    this.openPopup.emit();
  }
}
