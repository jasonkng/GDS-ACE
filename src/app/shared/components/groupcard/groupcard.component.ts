import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-groupcard',
  templateUrl: './groupcard.component.html',
  styleUrls: ['./groupcard.component.scss']
})
export class GroupCardComponent implements OnInit {

  @Input('data') groupStanding: any; 
  displayedColumns: string[] = ['team_name', 'points', 'goals_scored', 'special_points', 'date_created', 'qualify'];

  constructor() { }

  ngOnInit(): void {
    
  }

}
