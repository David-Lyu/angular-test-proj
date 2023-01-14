import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInjectionComponent } from './content-injection.component';

describe('ContentInjectionComponent', () => {
  let component: ContentInjectionComponent;
  let fixture: ComponentFixture<ContentInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentInjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
