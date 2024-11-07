import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSearchesPageComponent } from './recent-searches-page.component';

describe('RecentSearchesPageComponent', () => {
  let component: RecentSearchesPageComponent;
  let fixture: ComponentFixture<RecentSearchesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentSearchesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentSearchesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});