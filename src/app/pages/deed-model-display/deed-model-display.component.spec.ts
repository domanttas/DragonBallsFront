import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeedModelDisplayComponent } from './deed-model-display.component';

describe('DeedModelDisplayComponent', () => {
  let component: DeedModelDisplayComponent;
  let fixture: ComponentFixture<DeedModelDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeedModelDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeedModelDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
