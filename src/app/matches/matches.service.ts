import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private _http: HttpClient) { }

  getMatches(): Observable<any> {
    return this._http.get(`getMatches`);
  }

  deleteMatch(matchId: string): Observable<any> {
    return this._http.delete(`match/${matchId}`);
  }
}
