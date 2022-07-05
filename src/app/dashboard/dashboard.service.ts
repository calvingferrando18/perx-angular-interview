import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {
  }

  getJSON(): Observable<any> {
    return this.http.get('./assets/json/example.json');
  }
}
