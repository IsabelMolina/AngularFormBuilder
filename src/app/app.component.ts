import { Component } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  profileForm = this.fb.nonNullable.group({
    firstName: "",
    aliases: this.fb.array([
      this.fb.control('')
    ])
  })

  constructor(private fb: FormBuilder){ }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  
}
