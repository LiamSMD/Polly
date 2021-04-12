import { Component, OnInit, SystemJsNgModuleLoader, ViewChild } from '@angular/core';
import { AppService } from '../app-service';
import { Vote } from '../vote';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import * as ApexCharts from 'apexcharts'

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  @ViewChild('chart') chart: ApexCharts;

  public voteId: string;
  public vote: Vote;
  public subscription: Subscription



  constructor(private activatedRoute: ActivatedRoute, private appService: AppService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.voteId = params.id;
    });

    this.subscription = new Subscription();
    this.subscription.add(this.appService.loadVoteWithIdFromDB(this.voteId).subscribe(result => {
      this.vote = result;
    }));
  }

  async ngAfterViewInit() {
    await this.delay(500);
    this.getColorAndPercentage();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  public getColorAndPercentage() {

    var options = {
      series: [this.vote.votesYes, this.vote.votesNo],
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
                fontSize: '1.5rem',
                color: 'white',
              },
              value: {
                show: true,
                fontSize: '1.5rem',
                color: 'white',
              }
            }
          }
        }
      },

      labels: ['Stimmen Ja', 'Stimmen Nein'],
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

  public addYesVote(): void {
    this.vote.votesYes++;
  }

  public addNoVote(): void {
    this.vote.votesNo++;
  }

  public saveVotes() {
    this.subscription.add(this.appService.increaseVotes(this.vote.id, this.vote.votesYes, this.vote.votesNo).subscribe(result => {
      console.log(result)
    }));
  }

}
