import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  calValue;

  cinsiyetInput;
  yasInput;
  boyInput;
  kiloInput;
  aktiflikInput;

  constructor() {}

  onButton()
  {
    console.log()
    if(this.cinsiyetInput=="Erkek")
    {
      if(this.aktiflikInput=="Hareketsiz")
      {
      this.calValue=660+((13.7)*(parseInt(this.kiloInput)))+(5*(parseInt(this.boyInput)))-((6.8)*(parseInt(this.yasInput)))-350-258;
      }
      else if(this.aktiflikInput=="Az Aktif(1-2 gün)")
      {
      this.calValue=660+((13.7)*(parseInt(this.kiloInput)))+(5*(parseInt(this.boyInput)))-((6.8)*(parseInt(this.yasInput)))-350;
      }
      else if(this.aktiflikInput=="Orta Aktif(3 gün)")
      {
      this.calValue=660+((13.7)*(parseInt(this.kiloInput)))+(5*(parseInt(this.boyInput)))-((6.8)*(parseInt(this.yasInput)))-350+258;
      }
      else if(this.aktiflikInput=="Çok Aktif(4-5 gün)")
      {
      this.calValue=660+((13.7)*(parseInt(this.kiloInput)))+(5*(parseInt(this.boyInput)))-((6.8)*(parseInt(this.yasInput)))-350+258*2;
      }
      else if(this.aktiflikInput=="Sportif")
      {
      this.calValue=660+((13.7)*(parseInt(this.kiloInput)))+(5*(parseInt(this.boyInput)))-((6.8)*(parseInt(this.yasInput)))-350+258*3;
      }
    }

    else if(this.cinsiyetInput=="Kadın")
    {
      if(this.aktiflikInput=="Hareketsiz")
      {
        this.calValue=655+((9.6)*(parseInt(this.kiloInput)))+(5*(parseInt(this.boyInput)))-((4.7)*(parseInt(this.yasInput)))-350-258;
      }
      else if(this.aktiflikInput=="Az Aktif(1-2 gün)")
      {
        this.calValue=655+((9.6)*(parseInt(this.kiloInput)))+(5*(parseInt(this.boyInput)))-((4.7)*(parseInt(this.yasInput)))-350;
      }
      else if(this.aktiflikInput=="Orta Aktif(3 gün)")
      {
        this.calValue=655+((9.6)*(parseInt(this.kiloInput)))+(5*(parseInt(this.boyInput)))-((4.7)*(parseInt(this.yasInput)))-350+258;
      }
      else if(this.aktiflikInput=="Çok Aktif(4-5 gün)")
      {
        this.calValue=655+((9.6)*(parseInt(this.kiloInput)))+(5*(parseInt(this.boyInput)))-((4.7)*(parseInt(this.yasInput)))-350+258*2;
      }
      else if(this.aktiflikInput=="Sportif")
      {
        this.calValue=655+((9.6)*(parseInt(this.kiloInput)))+(5*(parseInt(this.boyInput)))-((4.7)*(parseInt(this.yasInput)))-350+258*3;
      }
    }
  }

}
