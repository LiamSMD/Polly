import { Component } from '@angular/core';
import * as ApexCharts from 'apexcharts'

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss']
})
export class MoneyComponent {

  constructor() { }
  public circle: any;
  public colors: string[] = ['#9500ff', '#0008ff', '#00d0ff', '#04ff00', '#ffea00', '#ff7f00', '#ff0000'];

  ngOnChanges() {
    this.circle = document.getElementById('field1');
    // Man kann online Werte eintragen und bei onchanges werden sie aktualisiert
  }

  ngAfterViewInit() {
    this.getColorAndPercentage();

  }

  public getColorAndPercentage() {
    var options = {
      series: this.calculateValues(),
      chart: {
      type: 'donut',
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '2rem',
              color: '#0047ab',
            },
            value: {
              show: true,
              fontSize: '2rem',
            }
          }
        }
      }
    },

    labels: ['ZVV-Abo', 'Essen', 'Melina', 'Sparen', 'Rest'],
    colors: this.colors,
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'center', 
      fontSize: '20pt',
      fontWeight: 400,
      markers: {
        width: 15,
        height: 15,
        strokeWidth: 0,
        radius: 15,
      },
    },

    fill: {
      opacity: 0.9,
      type: 'solid',
      gradient: {
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: []
      },
    },

    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
      }
    }]
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  
  }

  public calculateValues(): number[]{
    const total = 850;
    let numberArray = [175, 300, 70 ,200, (850 - 175 - 200 - 60 - 200)];
    return numberArray;
  }
}