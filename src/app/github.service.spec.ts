import { TestBed, inject } from '@angular/core/testing';

import { GitHubUserService } from './github.service';

describe('GitHubUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitHubUserService]
    });
  });

  it('should be created', inject([GitHubUserService], (service: GitHubUserService) => {
    expect(service).toBeTruthy();
  }));
});
