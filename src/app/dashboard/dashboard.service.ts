import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http: HttpClient) { }

  getTeams(): Observable<any> {
    return this._http.get(`teams`);
  }

  getPoints(groupNumber: string): Observable<any> {
    return this._http.get(`points/${groupNumber}`);
  }
}
