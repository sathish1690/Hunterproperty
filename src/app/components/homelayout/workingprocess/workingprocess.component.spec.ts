import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingprocessComponent } from './workingprocess.component';

describe('WorkingprocessComponent', () => {
  let component: WorkingprocessComponent;
  let fixture: ComponentFixture<WorkingprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkingprocessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
