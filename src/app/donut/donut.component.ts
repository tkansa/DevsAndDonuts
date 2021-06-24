import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutsService } from '../dounts.service'
import { Donut } from '../interfaces/donuts';


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  donut: Donut;
  id: number;


  constructor(private donutsService: DonutsService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = +params['id']; 
    }
    );
    this.donutsService.getDonut(this.id).subscribe(
      (data: Donut) => this.donut = { ...data },
      error => console.error(error)
      
    );
  }

}
