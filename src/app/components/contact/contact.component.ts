import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public response = {};
  public coordinates = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.http.get('https://simple-api.develobird.gr/contact')
      .subscribe(r => {
        this.response = r;
      });

  }

}
