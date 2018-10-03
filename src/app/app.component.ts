import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CSC 436 Weather App';

  constructor(private http: HttpClient) {
    this.cityDetails = {
      cityName: '',
      stateCode: '',
    };
    this.weatherForecasts = [];

  }

}


