import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html', 
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public data: any = {};
  public city: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.city = params.city;  
      this.getWeather();
    });
  }

  public getWeather() {
    this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&units=metric&APPID=19dbd20028e297aa636b35d21a7dca48").subscribe(response => {
      this.data = response;
    })
  }

}
