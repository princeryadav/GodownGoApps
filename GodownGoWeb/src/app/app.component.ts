import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  isPopupVisible = false;
  popupTitle = 'Create New Item';
  popupFields = [
    { label: 'Field 1', name: 'field1', type: 'text' },
    { label: 'Field 2', name: 'field2', type: 'text' }
    // Add more fields as needed
  ];

  showPopup() {
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }
}
