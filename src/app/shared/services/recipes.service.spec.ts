import { TestBed } from '@angular/core/testing';

import { RecipeService } from '@shared/services/recipes.service';

describe('RecipesService', () => {
  let service: RecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
