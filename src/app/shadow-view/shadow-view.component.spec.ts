import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowViewComponent } from './shadow-view.component';

describe('ShadowViewComponent', () => {
  let component: ShadowViewComponent;
  let fixture: ComponentFixture<ShadowViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
