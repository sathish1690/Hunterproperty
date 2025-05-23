import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestquoteComponent } from './requestquote.component';

describe('RequestquoteComponent', () => {
  let component: RequestquoteComponent;
  let fixture: ComponentFixture<RequestquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestquoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
