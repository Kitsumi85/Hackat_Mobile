import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage ) {
  }
  async ngOnItnit(){
    await this.storage.create();
    await this.storage.set("favAtelier",[])
  }
}
