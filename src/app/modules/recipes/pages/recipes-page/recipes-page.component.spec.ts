import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesPageComponent } from './recipes-page.component';

describe('RecipesComponent', () => {
  let component: RecipesPageComponent;
  let fixture: ComponentFixture<RecipesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
