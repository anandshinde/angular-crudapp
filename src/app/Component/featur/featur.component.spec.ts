import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturComponent } from './featur.component';

describe('FeaturComponent', () => {
  let component: FeaturComponent;
  let fixture: ComponentFixture<FeaturComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
