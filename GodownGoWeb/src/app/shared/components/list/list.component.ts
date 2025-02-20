import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'g-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() data:any
  columns: string[] = ['Name', 'Age', 'Occupation'];
  rows: any[] = [
    { name: 'John Doe', age: 28, occupation: 'Engineer' },
    { name: 'Jane Smith', age: 34, occupation: 'Designer' },
    { name: 'Samuel Green', age: 45, occupation: 'Manager' }
  ];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("onChanges",changes['data'])
    if (changes['data'].currentValue) {
      this.rows.push(changes['data'].currentValue);
    }
  }

}
