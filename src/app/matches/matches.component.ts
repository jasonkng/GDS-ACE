import { Component, OnInit } from '@angular/core';
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


  constructor(private _matchesSvc: MatchesService) { }

  ngOnInit(): void {
    this.getMatches();
  }

  getMatches() {
    this.loading = true;
    this.isError = false;
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
    console.log(this.matchHistory);
    if (Object.keys(this.isThereMatchHistory).length === 0) this.isThereMatchHistory = false;
    else this.isThereMatchHistory = true;
    console.log(this.isThereMatchHistory)
  }

  deleteMatch(matchId: string): void {
    this._matchesSvc.deleteMatch(matchId).subscribe((resp: any) => {
      if(resp.success) this.getMatches();
    })
  }

}
