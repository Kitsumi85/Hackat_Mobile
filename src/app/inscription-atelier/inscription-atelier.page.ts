import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-inscription-atelier',
  templateUrl: 'inscription-atelier.page.html',
  styleUrls: ['inscription-atelier.page.scss'],
})
export class InscriptionAtelierPage implements OnInit {

  myForm: any;
  item : any;
  submitted = false;
  constructor(public formBuilder: FormBuilder, public http: HttpClient, private router: Router) { }

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
      this.http.post("http://192.168.55.15:8080/api/inscription-atelier/" + this.item.id, JSON.stringify(this.myForm.value), {
        headers: {"Content-Type": "application/json; charset=utf-8"}
      }).subscribe(

        (data:any) =>{ 
        console.log(data)
        if (data.erreur) {
          this.router.navigate(['/erreur'])
        }
        },
        );
      let NavigationExtras:NavigationExtras={
        state:{
          param1 :this.item
        }
        };
      this.router.navigate(['/atelier'],NavigationExtras)
     
      return true;
    }
  }
}
