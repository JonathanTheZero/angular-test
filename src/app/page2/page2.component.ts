import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'page2',
  templateUrl: './page2.component.html',
  styleUrls: [
    './page2.component.css'
  ]
})
export class Page2Component {

  showText() : void {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  
}