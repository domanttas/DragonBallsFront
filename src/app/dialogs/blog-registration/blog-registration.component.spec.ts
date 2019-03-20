import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRegistrationComponent } from './blog-registration.component';

describe('BlogRegistrationComponent', () => {
  let component: BlogRegistrationComponent;
  let fixture: ComponentFixture<BlogRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
