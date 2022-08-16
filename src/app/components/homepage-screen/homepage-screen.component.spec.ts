import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageScreenComponent } from './homepage-screen.component';

describe('HomepageScreenComponent', () => {
  let component: HomepageScreenComponent;
  let fixture: ComponentFixture<HomepageScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
