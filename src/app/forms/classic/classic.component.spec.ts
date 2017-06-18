import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicComponent } from './classic.component';

describe('ClassicComponent', () => {
  let component: ClassicComponent;
  let fixture: ComponentFixture<ClassicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
