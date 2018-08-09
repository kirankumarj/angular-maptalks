import { TestBed, inject } from '@angular/core/testing';

import { OrganizationService } from './organization.service';
import { HttpClientModule } from '@angular/common/http';
import {RestService} from './rest.service';



describe('OrganizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [OrganizationService, RestService]
    });
  });

  it('should be created', inject([OrganizationService, RestService], (service: OrganizationService) => {
    expect(service).toBeTruthy();
  }));
});
