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
  isAlertOpen = false;
  alertButtons = ['Retour'];
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  constructor(public formBuilder: FormBuilder, private http:HttpClient, private router : Router) {
    let navigation:any =this.router.getCurrentNavigation()?.extras.state
      this.item= navigation.param1;
   }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    })
  }
 
  get errorCtr() {
    return this.myForm.controls;
  }
  

  onSubmit() {
    this.submitted = true;
    if (!this.myForm.valid) {
      return false;
    } else {
      this.http.post("http://192.168.55.15:8080/api/inscription-atelier/" + this.item.id, JSON.stringify(this.myForm.value), {
        headers: {"Content-Type": "application/json; charset=utf-8"}
      }).subscribe(
        (data:any) =>{ 
        if (data.erreur) {
          this.setOpen(true)
        }
        else{
          let NavigationExtras:NavigationExtras={
          state:{
            param1 :this.item
          }
          };
          this.router.navigate(['/home'],NavigationExtras)
        }
        },
        );
      return true;
    }
  }
}
