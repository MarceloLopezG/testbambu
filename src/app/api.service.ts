import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '040b69d40d87423aaf8c15699ad80376';
  
  constructor(private httpClient: HttpClient) {
  }

  public getNewsCountryCategory(Country, Category){                       
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country='+Country+'&category='+Category+'&apiKey='+this.API_KEY);
  }
}