import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectskillsComponent } from './projectskills.component';

describe('ProjectskillsComponent', () => {
  let component: ProjectskillsComponent;
  let fixture: ComponentFixture<ProjectskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectskillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
