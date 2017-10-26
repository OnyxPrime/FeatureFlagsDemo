/*
This service is a wrapper around the LaunchDarkly SDK, allowing the underlying
feature flag provider to be easily swapped.
*/

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as LDClient from 'ldclient-js';
import { environment } from '../environments/environment';

@Injectable()
export class FeatureFlagService {
  ldClient: any;
  flags: any;
  flagChange: Subject<Object> = new Subject<Object>();
  constructor() {

// flags contain the feature flags we will use in our application.
// we predefine the value to false to prevent the user from potentially seeing
// something they shouldn't
    this.flags = {'ln-search': false, 'ln-api': false};

// intializing the connection to the LaunchDarkly service with our service key
// these values should be placed in the environment.ts file.
// at this point we don't know who our use is, so we intialize with an anonymoud ID
    this.ldClient = LDClient.initialize(environment.LAUNCHDARKLY_ENV_ID,
      {key: environment.ANONYMOUS_USER_ID, anonymous: true });

// we subscribe to the change event to be notified when any flag is modified
      this.ldClient.on('change', (flags => {

// because we are notified of changes to any feature flag setup in LaunchDarkly portal,
// we only check for changes to the feature flags we care about.
        if (flags['ln-search'] !== undefined) {
          this.flags['ln-search'] = flags['ln-search'].current;
        }
        if (flags['ln-api'] !== undefined) {
          this.flags['ln-api'] = flags['ln-api'].current;
        }

// this call notifies any subscribers to our internal change event our feture flags
// have potentially changed.
        this.flagChange.next(this.flags);
      }));

// when our LaunchDarkly client as been initialized, we need to get our feature flags values
      this.ldClient.on('ready', () => {
        this.setFlags();
      });
    };

// this method calls out the LaunchDarkly service to retrieve all feture flags setup for our project
    setFlags() {
      this.flags = this.ldClient.allFlags();
      this.flagChange.next(this.flags);
    };

// this method changes the user so we can get flags specifically targeted to that user
    changeUser(user) {
      if (user !== 'Anonymous') {
        this.ldClient.identify({key: user, name: user, anonymous: false});
      } else {
        this.ldClient.identify({key: 'anon', anonymous: true});
      }
    };
  }
