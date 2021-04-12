import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {

  constructor() { }

  public weekdays: string[];
  ngOnInit(): void {
    this.getDaysofMonth();
  }

  public getDaysofMonth(): void {
    let date = new Date();
    const month = date.getMonth();
    date.setDate(1);
    var all_days = [];

    while (date.getMonth() == month) {
      let d = date.getFullYear() + '-' + date.getMonth().toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0');
      all_days.push(d);
      date.setDate(date.getDate() + 1);
    }
    this.weekdays = all_days;
  }
}
