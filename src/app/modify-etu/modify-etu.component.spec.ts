import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEtuComponent } from './modify-etu.component';

describe('ModifyEtuComponent', () => {
  let component: ModifyEtuComponent;
  let fixture: ComponentFixture<ModifyEtuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyEtuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyEtuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
