import { Component, OnInit } from '@angular/core';

export class Request {
  public name: string;
  public origination_airport: string = '';
  public destination_airport: string = '';
  public departure_date: Date;
  public return_date: Date;
  public number_of_travelers: number = 1;
}

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model = new Request();

  AirportCodes: string[] = [
    'ORD',
    'MSP',
    'LAX',
    'SEA',
    'RAP',
    'DEN',
    'LGA',
    'JFK'
  ];

  //selectedAirport = '';

}
