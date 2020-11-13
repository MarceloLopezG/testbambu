import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {
  }

  API_KEY = '040b69d40d87423aaf8c15699ad80376';

  public getNewsCountry(){
    return this.httpClient.get('http://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=' + this.API_KEY);
  } 

  public getNewsCategory(){
    return this.httpClient.get('http://newsapi.org/v2/top-headlines?category=business&apiKey=' + this.API_KEY);
  }

  public getNewsCountryCategory(){
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey='+this.API_KEY);
  }
}
