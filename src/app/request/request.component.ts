import { Component, OnInit } from '@angular/core';

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


  onSubmit(f: NgForm): void {
    this.model.total_cost_of_trip = f.value.number_of_travelers * this.model.price_per_ticket;
    console.log(this.model.total_cost_of_trip);

    // console.log(this.isHidden);
    this.isHidden = false;
  }
}
