import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEtusComponent } from './display-etus.component';

describe('DisplayEtusComponent', () => {
  let component: DisplayEtusComponent;
  let fixture: ComponentFixture<DisplayEtusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEtusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEtusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
