import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  countryName!: string;
  detailsList: any;
  detail: any;

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.countryName = params.country;
    })

    this.http.getDetails(this.countryName).subscribe((details) => {
      console.log(details);
      this.detailsList = details;
      this.detail = this.detailsList[0];
      this.http.setPath(this.detail.region);
    })
    
    
  }

}
