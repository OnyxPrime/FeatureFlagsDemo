import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FeatureFlagService } from './feature-flag.service';

@Injectable()
export class LegoNinjagoService {
  private characters = ['Jay', 'Kai', 'Cole', 'Zane', 'Lloyd', 'Nya', 'Master Wu', 'Garmadon' ];

  // Call ASP.NET Core 'microservice'
  ninjasUrl = 'http://localhost:5000/api/lego/ninjas';
  useWebApi = true;
  _subscription: any;

  constructor(private ff: FeatureFlagService, private http: Http) {
    this.useWebApi = ff.flags['ln-api'];

    this._subscription = ff.flagChange.subscribe((flags) => {
      this.useWebApi = flags['ln-api'];
    });
  }

  getAllCharacters(): Observable<string[]> {
    if (this.useWebApi) {
      return this.http.get(this.ninjasUrl)
               .map((res: Response) => res.json())
               .catch(this.handleError);
    } else {
      return Observable.of(this.characters);
    }
  }

  private filterCharacters(term): string[] {
    const result: string[] = [];
    for (let i = 0; i < this.characters.length; i++) {
      if (this.characters[i].indexOf(term) > -1) {
        result.push(this.characters[i]);
      }
    }
    return result;
  }

  private handleError(error: any) {
            console.error('server error:', error);
            if (error instanceof Response) {
              let errMessage = '';
              try {
                errMessage = error.json().error;
              } catch(err) {
                errMessage = error.statusText;
              }
              return Observable.throw(errMessage);
            }
            return Observable.throw(error || 'Node.js server error');
        }

  searchForCharacter(term): Observable<string[]> {
    const results = this.filterCharacters(term);
    if (results.length > 0) {
      return Observable.of(results);
    } else {
      return Observable.of([term + ' not found']);
    }
  }
}
