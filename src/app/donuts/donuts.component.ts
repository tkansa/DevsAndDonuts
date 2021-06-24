import { Component, OnInit } from '@angular/core';
import { DonutsService } from '../dounts.service'
import { Donuts } from '../interfaces/donuts';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {
  donuts:Donuts;

  constructor(private donutsService: DonutsService) { }

  ngOnInit(): void {
    this.donutsService.getDonuts().subscribe(
      (data: Donuts) => this.donuts = { ...data},
      error => console.error(error)
    );
  }

}
