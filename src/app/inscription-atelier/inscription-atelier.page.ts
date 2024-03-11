import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-inscription-atelier',
  templateUrl: 'inscription-atelier.page.html',
  styleUrls: ['inscription-atelier.page.scss'],
})
export class InscriptionAtelierPage implements OnInit {

  myForm: any;
  submitted = false;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    })
  }
 
  get errorCtr() {
    return this.myForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.myForm.valid) {
      console.log('All fields are required.')
      return false;
    } else {
      console.log(this.myForm.value)
      return true;
    }
  }
}
