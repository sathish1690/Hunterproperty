import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosliderComponent } from './logoslider.component';

describe('LogosliderComponent', () => {
  let component: LogosliderComponent;
  let fixture: ComponentFixture<LogosliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogosliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogosliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
