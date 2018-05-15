import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'oefhttp',
  templateUrl: './oefhttp.component.html',
  styleUrls: ['./oefhttp.component.css']
})
export class OefhttpComponent implements OnInit {
  users: any[];

  constructor(private http: HttpClient) {

   }

  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/users").subscribe(
      data => { this.users = data as any[];},
      error => {
        console.log("Er is iets fout gelopen tijdens het opvragen van de gegevens.");
        console.log(error.message);
      }
    );
  }

}
