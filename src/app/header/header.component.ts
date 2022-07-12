import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedDialogComponent } from '../shared/dialogs/shared-dialog/shared-dialog.component';
import { GeneralService } from '../shared/services/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  constructor(private _router: Router, private _dialog: MatDialog, private _genSvc: GeneralService) { }

  ngOnInit(): void {
  }

  resetGame(): void {
    this._genSvc.resetGame().subscribe((data: any) => {
      if(data.success) this.updateGetPoints();
    })
  }

  navigate(route: string): void {
    this._router.navigate([`${route}`]);
  }

  addTeams() {
    let dialogObj = {
      path: 'addTeams',
      title: 'Add Teams',
      instructions: 'Insert into text area <Team A name> <Team A registration date in DD/MM> <Team A group number> with line break to create a team'
    }
    const dialogRef = this._dialog.open(SharedDialogComponent, {
      width: '80%',
      data: dialogObj,
      panelClass: 'custom-modalbox'
    })
    dialogRef.afterClosed().subscribe(_ => this.updateGetPoints());
  }

  addMatches() {
    let dialogObj = {
      path: 'addMatches',
      title: 'Add Matches',
      instructions: 'Insert into text area <Team A name> <Team B name> <Team A goals scored> <Team B goals scored> with line break between each game'
    }
    const dialogRef = this._dialog.open(SharedDialogComponent, {
      width: '80%',
      data: dialogObj,
      panelClass: 'custom-modalbox'
    })
    dialogRef.afterClosed().subscribe(_ => this.updateGetPoints());
  }

  updateGetPoints() {
    this._genSvc.pointsChanged(true);
  }

}
