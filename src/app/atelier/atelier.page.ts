import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.page.html',
  styleUrls: ['./atelier.page.scss'],
})
export class AtelierPage{

  LesAteliers:any
  id:any;
  favAtelier :Array<any> = [];
  submitted = false; 
  constructor(public http:HttpClient, private router: Router, private storage: Storage)
  {
    let navigation:any =this.router.getCurrentNavigation()?.extras.state
    this.id= navigation.param1;
    let url = "http://192.168.55.15:8080/api/evenements-ateliers/" + this.id.id;
    this.http.get(url).subscribe(data =>{
    this.LesAteliers=data;
    })
  }
  async ngOnInit(){
     this.favAtelier = await this.storage.get("favAtelier")
    }
  
  OnLike(id : any){
    
  }

  splitDate(value:any){
    return new Date(value).toLocaleDateString("en-GB");
  }

  onSubmit(item: any) {
    this.submitted = true;
    let NavigationExtras:NavigationExtras={
      state:{
        param1 :item
      }
    };
    this.router.navigate(['/inscription-atelier'],NavigationExtras);

  }
}
