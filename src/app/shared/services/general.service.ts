import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  callGetPoints = new BehaviorSubject<boolean>(false);

  constructor(private _http: HttpClient) {}

  pointsChanged(flag: boolean) {
    this.callGetPoints.next(flag);
  }

  addTeams(teamList: any): Observable<any> {
    return this._http.post(`addTeams`, teamList);
  }

  addMatches(matchList: any): Observable<any> {
    return this._http.post(`matches`, matchList);
  }
  
  resetGame(){
    return this._http.delete(`deleteAll`);
  }
}
