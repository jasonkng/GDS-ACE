import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  scoreBoardOne: any = [];
  scoreBoardTwo: any = [];

  constructor(private _dialog: MatDialog, private _dashboardSvc: DashboardService) { }

  ngOnInit(): void {

  }

  getTeams() {
    this._dashboardSvc.getTeams().subscribe((resp: any) => {
      console.log(resp);
    })
  }

  addTeams() {


  }



}
