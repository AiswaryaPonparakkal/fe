import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvaComponent } from './adva.component';

describe('AdvaComponent', () => {
  let component: AdvaComponent;
  let fixture: ComponentFixture<AdvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
