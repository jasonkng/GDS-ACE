import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'shared-dialog',
  templateUrl: './shared-dialog.component.html',
  styleUrls: ['./shared-dialog.component.scss']
})
export class SharedDialogComponent implements OnInit {

  instruction: string = "";
  teamListObject: any = {
    teamName: "",
    groupNumber: "",
    dateCreated: "",
  }

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _generalSvc: GeneralService
  ) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  submitTeams(teamList: string): void {
    if(!teamList) return;
    else {
      let teamListArr: any[] = [];
      teamList.split("\n").forEach((item: any, index: number) => {
        let singleItem = item.split(' ');
        let obj = {
          teamName: singleItem[0],
          dateCreated: singleItem[1],
          groupNumber: singleItem[2]
        }
        teamListArr.push(obj);
      });
      let req = this.formatReq(teamListArr);
      this._generalSvc.addTeams(req).subscribe((data: any) => {
        if(data.success) this.closeDialog();
      })
    }
  }

  submitMatches(matchScoreList: string): void {
    if(!matchScoreList) return;
    else {
      let matchListArr: any[] = [];
      matchScoreList.split("\n").forEach((item: any) => {
        let singleItem = item.split(' ');
        let obj = {
          teamHome: singleItem[0],
          teamAway: singleItem[1],
          teamHomeGoals: singleItem[2],
          teamAwayGoals: singleItem[3]
        }
        matchListArr.push(obj);
      })
      let req = this.formatReq(matchListArr);
      console.log(req);
      this._generalSvc.addMatches(req).subscribe((data: any) => {
        if(data.success) this.closeDialog();
      })
      
    }
  }

  formatReq(inputArr: any[]) {
    return this.data.path === 'addTeams' ? {
      teams: inputArr
    } : {
      matches: inputArr
    }
  } 

}
