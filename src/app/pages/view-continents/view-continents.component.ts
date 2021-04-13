import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-view-continents',
  templateUrl: './view-continents.component.html',
  styleUrls: ['./view-continents.component.css']
})
export class ViewContinentsComponent implements OnInit {

  Americas = 'Americas';
  Europe = 'Europe';
  Africa = 'Africa';
  Asia = 'Asia';
  Oceania = 'Oceania';


  constructor(private http: HttpService) { }

  ngOnInit(): void {

    this.http.setPath('continents');
  }

}
