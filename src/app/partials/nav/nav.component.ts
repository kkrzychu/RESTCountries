import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  path = '';
  hide = true;
  
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getPath().subscribe((data) => {
      console.log(data);
      if(data == 'countries') {
        this.path = 'continents'
        this.hide = true;
      }
      else if(data == 'continents') {
        this.hide = false;
      } else {
        this.path = 'countries/' + data;
        this.hide = true;
      }
    })
  }

}
