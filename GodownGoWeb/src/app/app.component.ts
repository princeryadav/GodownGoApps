import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  listData:any;
  isPopupVisible = false;
  popupTitle = 'Create New Item';
  popupFields = [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'Age', name: 'age', type: 'text' },
    { label: 'Occupation', name: 'occupation', type: 'text' },
    // Add more fields as needed
  ];

  showPopup() {
    this.isPopupVisible = true;
  }

  hidePopup(data:any) {
    console.log("hidePopup",data)
    this.listData = data;
    console.log("hidePopup list",this.listData)
    this.isPopupVisible = false;
  }
}
