import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app-service';
import { Vote } from '../vote';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  private subscription: Subscription;

  public votes: Vote[];
  
  constructor(private appService: AppService) { }

  ngOnInit(): void {

    this.subscription = new Subscription();
    
    this.subscription.add(this.appService.loadVotesFromDB().subscribe(result => {
      this.votes = result;
    }));

  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
