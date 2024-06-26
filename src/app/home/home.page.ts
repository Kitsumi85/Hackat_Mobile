import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  LesHackathons:any
  constructor(private router : Router, private http:HttpClient) {
    this.http.get("http://192.168.55.15:8080/api/hackathon").subscribe(data =>{
      this.LesHackathons=data;
  })
  }

  splitDate(value:any){
    return new Date(value).toLocaleDateString("en-GB");
  }


  MonClick(item:any)
  {
      let NavigationExtras:NavigationExtras={
        state:{
          param1 :item
        }
      };
      this.router.navigate(['/atelier'],NavigationExtras) 
  }
}
