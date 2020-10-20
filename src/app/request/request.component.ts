import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

export class Request {
  public name: string;
  public origination_airport: string = '';
  public destination_airport: string = '';
  public departure_date: Date;
  public return_date: Date;
  public number_of_travelers: number = 1;
  public price_per_ticket: number = 150;
  public total_cost_of_trip: number;
}

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  isHidden: boolean = true;

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


  onSubmit(f: NgForm): void {
    this.model.total_cost_of_trip = f.value.number_of_travelers * this.model.price_per_ticket;
    console.log(this.model.total_cost_of_trip);

    // console.log(this.isHidden);
    this.isHidden = false;
  }
}
