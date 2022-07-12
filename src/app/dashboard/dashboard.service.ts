import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http: HttpClient) { }

  getTeams(): Observable<any> {
    return this._http.get(`teams`);
  }

  getMatches(groupNumber: string): Observable<any> {
    return this._http.get(`matches/${groupNumber}`);
  }

}
