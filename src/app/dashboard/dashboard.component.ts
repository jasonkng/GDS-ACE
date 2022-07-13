import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { forkJoin, Subscription } from 'rxjs';
import { SharedDialogComponent } from '../shared/dialogs/shared-dialog/shared-dialog.component';
import { GeneralService } from '../shared/services/general.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  scoreBoardOne: any = [];
  scoreBoardTwo: any = [];
  isThereTeams: boolean = false;
  loading: boolean = false;
  isError: boolean = false;
  subscriptions: Subscription[] = [];

  constructor(private _dialog: MatDialog, private _dashboardSvc: DashboardService, private _genSvc: GeneralService) { }
  
  ngOnInit(): void {
    this.getPoints();
    this.subscriptions.push(this._genSvc.callGetPoints.subscribe((data: boolean) => {
      if(data) this.getPoints();
    }))
  }

  getPoints() {
    this.isError = false;
    this.loading = true;
    forkJoin([
      this._dashboardSvc.getPoints("1"),
      this._dashboardSvc.getPoints("2"),
    ]).subscribe((respList: any) => {
      this.scoreBoardOne = respList[0].data;
      this.scoreBoardTwo = respList[1].data;
      this.verifyScoreBoard();
      this.loading = false;
    }, (err) => {
      console.log("Error", err);
      this.isError = true;
    })
  }

  verifyScoreBoard(): void {
    if(Array.isArray(this.scoreBoardOne) || Array.isArray(this.scoreBoardTwo)) this.isThereTeams = true;
    else this.isThereTeams = false;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: any) => {
      if(sub) sub.unsubscribe();
    })
  }
}
