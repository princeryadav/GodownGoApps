import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'g-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() title: string;
  @Input() fields: Array<{ label: string, name: string, type: string }>;
  @Output() close = new EventEmitter<void>();
  createForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const formControls = this.fields.reduce((acc, field) => {
      acc[field.name] = new FormControl('');
      return acc;
    }, {});
    
    this.createForm = this.fb.group(formControls);
  }

  onSubmit() {
    console.log(this.createForm.value);
    // Add your form submission logic here
    this.close.emit();
  }
  onClose(){
    this.close.emit();
  }
}
