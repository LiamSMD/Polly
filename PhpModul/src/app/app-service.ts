import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vote } from '../app/vote';


@Injectable({ providedIn: 'root' })
export class AppService {

  private url = `https://localhost:44319/`;
  constructor(private readonly http: HttpClient) {}

  loadVotesFromDB(){
    return this.http.get<Vote[]>(`${this.url}vote/GetAll`);
  }

  loadVoteWithIdFromDB(id: string){
    return this.http.get<Vote>(`${this.url}vote/GetVoteById?id=${id}`);
  }

  increaseVotes(id: string, votesYes: number, votesNo: number){
    return this.http.get<string>(`${this.url}vote/IncreaseVotes?id=${id}&votesYes=${votesYes}&votesNo=${votesNo}`);
  }
}
