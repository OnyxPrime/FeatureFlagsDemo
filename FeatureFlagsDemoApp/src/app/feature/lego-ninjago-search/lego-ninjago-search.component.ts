import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { LegoNinjagoService } from '../../lego-ninjago.service';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'lego-ninjago-search',
  templateUrl: './lego-ninjago-search.component.html',
  styleUrls: ['./lego-ninjago-search.component.css'],
  providers: []
})
export class LegoNinjagoSearchComponent implements OnInit {
  characters: Observable<string[]>;
  private searchTerms = new Subject<string>();
  constructor(private ninjagoService: LegoNinjagoService) { }

  search(term: string) {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.characters = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.ninjagoService.searchForCharacter(term)
        : Observable.of<string[]>([]))
      .catch(error => {
        return Observable.of<string[]>([]);
      });
  }

}
