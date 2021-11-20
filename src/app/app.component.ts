import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  kitaplar:any = [
    { 
      name:"Kör Oğlu", okundumu:true, favorite:true
    },
    { 
      name:"Marslı", okundumu:false, favorite:true
    },
    { 
      name:"Aya Yolculuk", okundumu: true, favorite:false
    }
  ]

}
