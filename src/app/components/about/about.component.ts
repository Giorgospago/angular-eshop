import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public response = {};

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.http.get('https://simple-api.develobird.gr/about')
      .subscribe(r => {
        this.response = r;
      });

  }

}
