import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinalFantasyService {

  constructor(private http: HttpClient) { }

  public getFinalFantasySearch = (term: String, category: String): Observable<any[]> => {
    return this.http.get<any[]>(`${environment.url}/${category}/search?name=${term}`);
  };

}
