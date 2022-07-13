import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneralService } from '../shared/services/general.service';
import { MatchesService } from './matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  
  loading: boolean = true;
  isError: boolean = false;
  isThereMatchHistory: boolean = true;
  matchHistory: any[] = [];
  displayedColumns: string[] = ['team_home', 'team_home_goals', 'team_away_goals', 'team_away', 'delete_match'];
  subscriptions: Subscription[] = []


  constructor(private _matchesSvc: MatchesService, private _genSvc: GeneralService) { }

  ngOnInit(): void {
    this.getMatches();
    this.subscriptions.push(this._genSvc.callGetPoints.subscribe((data: boolean) => {
      if(data) this.getMatches();
    }))
  }

  getMatches() {
    this.loading = true;
    this.isError = false;
    this.isThereMatchHistory = true;
    this._matchesSvc.getMatches().subscribe((resp: any) => {
      if(resp.success) this.matchHistory = resp.data;
      this.loading = false;
      this.verifyMatchHistoryLength();
    }, (err) => {
      console.log("Error");
      this.isError = true;
      this.loading = false;
    })
  }

  verifyMatchHistoryLength() {
    this.isThereMatchHistory = Array.isArray(this.matchHistory);
  }

  deleteMatch(matchId: string): void {
    this._matchesSvc.deleteMatch(matchId).subscribe((resp: any) => {
      if(resp.success) this.getMatches();
    })
  }

}
