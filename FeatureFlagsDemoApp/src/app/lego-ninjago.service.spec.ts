/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LegoNinjagoService } from './lego-ninjago.service';

describe('LegoNinjagoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LegoNinjagoService]
    });
  });

  it('should ...', inject([LegoNinjagoService], (service: LegoNinjagoService) => {
    expect(service).toBeTruthy();
  }));
});
