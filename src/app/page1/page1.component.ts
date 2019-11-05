import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'page1',
  templateUrl: './page1.component.html',
  styleUrls: [
    './page1.component.css'
  ]
})
export class Page1Component implements OnInit{
  ngOnInit(): void{
    $.getJSON("https://api.nasa.gov/planetary/apod?api_key=rhTeZCLR1joXdLm3qE1J6ji6Q9d7DXDU3kwR7rmQ",
      function (data) {
        $("#nasadate").html(`<br />${data.date}<br />`);
        $("#nasaexp").html(data.explanation + "<br />");
        $("#nasahdurl").html(`<img src="${data.hdurl}">`);
      }
    );
  }
}
