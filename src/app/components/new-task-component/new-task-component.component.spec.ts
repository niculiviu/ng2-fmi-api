import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskComponentComponent } from './new-task-component.component';

describe('NewTaskComponentComponent', () => {
  let component: NewTaskComponentComponent;
  let fixture: ComponentFixture<NewTaskComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTaskComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
