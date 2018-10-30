import { Component, OnInit, Input} from '@angular/core';
import { weatherBit } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CityDetails } from "../models/CityDetails";
import {WeatherForecast} from "../models/WeatherForecasts";

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent implements OnInit {

  weatherBitUrl: string;
  weatherForecasts:WeatherForecast[];
  cityDetails: CityDetails;
  @Input() searchText: string;

  constructor(private http: HttpClient) {
    this.cityDetails = new CityDetails('','');
    this.weatherForecasts = [];
  }
  getWeather() {
    this.weatherBitUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${this.searchText}&key=${weatherBit.apiKey}`;
    this.http.get(this.weatherBitUrl).subscribe( (results: any) => {
      console.log('**** WEATHER RESULTS ****')
      console.log(results)
      console.log('**** WEATHER RESULTS ****')
      this.weatherForecasts = results['data'];
      this.cityDetails.name = results['city_name'];
      this.cityDetails.state = results['state_code'];
    });
  }
  ngOnInit() {
  }

}
