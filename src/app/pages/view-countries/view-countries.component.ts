import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-view-countries',
  templateUrl: './view-countries.component.html',
  styleUrls: ['./view-countries.component.css']
})
export class ViewCountriesComponent implements OnInit {

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  region!: string;
  listOfCountires: any;

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.region = params.region;
    })
    
    this.http.getCountries(this.region).subscribe((list) => {
      this.listOfCountires = list;
      this.http.setPath('countries');
    })
  }
}
