import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FeatureFlagService } from './feature-flag.service';
import { LegoNinjagoService } from './lego-ninjago.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LegoNinjagoService, FeatureFlagService]
})
export class AppComponent {
  title = 'Lego Ninjago Characters';
  showNinjagoSearch = false;
  _subscription: any;
  characters: string[];

// inject the feature flag service in to our component
  constructor(private ff: FeatureFlagService, private lns: LegoNinjagoService) {

// get the fetaure flag value from the feature flag service
    this.showNinjagoSearch = ff.flags['ln-search'];

// subscribe to the feature flag change event to ensure our user is able to access
// the new feature the moment it becomes available, without the need of refreshing
// the page
    this._subscription = ff.flagChange.subscribe((flags) => {
      this.showNinjagoSearch = flags['ln-search'];
    });
    lns.getAllCharacters()
    .subscribe(data => this.characters = data);
  }
}
