import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipesListBodyComponent } from './recipes-list-body.component';

describe('RecipesListBodyComponent', () => {
  let component: RecipesListBodyComponent;
  let fixture: ComponentFixture<RecipesListBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesListBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
