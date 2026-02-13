import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoundryApiConstants } from '../../../shared/utils/constants/api.constants';
import { FoundryStatus } from '../models/foundry.model';

@Injectable({
  providedIn: 'root',
})
export class FoundryStatusService {
  constructor(private http: HttpClient) {}

  public getStatus(): Observable<FoundryStatus> {
    return this.http.get<FoundryStatus>(FoundryApiConstants.STATUS);
  }
}
