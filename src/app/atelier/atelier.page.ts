import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.page.html',
  styleUrls: ['./atelier.page.scss'],
})
export class AtelierPage implements OnInit {

  public LesAteliers:any
  public id:any;
  submitted = false; 
  constructor(public http:HttpClient, private router: Router)
    { 
      let navigation:any =this.router.getCurrentNavigation()?.extras.state
      this.id= navigation.param1;
      let url = "http://192.168.55.15:8080/api/evenements-ateliers/" + this.id.id;
      this.http.get(url).subscribe(data =>{
      this.LesAteliers=data;
    })
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

  ngOnInit() {
  }

}
