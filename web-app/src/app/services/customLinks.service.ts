import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as Names from 'src/app/common/global-names';

@Injectable({
  providedIn: 'root',
})
export class CustomLinksService {
  private apiURL = Names.apiURL;

  constructor(private http: HttpClient) {}

  generateCustomLink(id: Number, url: String): Observable<Object> {
    const endpointURL = this.apiURL + '/customLinks';
    const newCustomLink = {
      "id": id,
      "url": url
    };

    return this.http.post<Object>(endpointURL, newCustomLink);
  }

  getAllCustomLinks(): Observable<Object> {
    const endpointURL = this.apiURL + '/customLinks/';
    return this.http.get<Object>(endpointURL);
  };

  getCustomLink(id: Number): Observable<Object> {
    const endpointURL = this.apiURL + '/customLinks/' + id;
    return this.http.get<Object>(endpointURL);
  }
}
