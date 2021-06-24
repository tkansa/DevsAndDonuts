import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donut, Donuts } from './interfaces/donuts'

@Injectable({
  providedIn: 'root'
})
export class DonutsService {

  donutsUrl = 'https://grandcircusco.github.io/demo-apis/donuts.json';
  donutUrl = 'https://grandcircusco.github.io/demo-apis/donuts';
  
  constructor(private http: HttpClient) { }

  getDonuts(){
    return this.http.get<Donuts>(this.donutsUrl);
  }

  getDonut(id: number){
    return this.http.get<Donut>(this.donutUrl + "/" + id + ".json");

  }

}
