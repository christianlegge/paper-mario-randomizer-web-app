import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcludeIndividualChecksComponent } from './exclude-individual-checks.component';

describe('GlitchesAndTricksComponent', () => {
  let component: ExcludeIndividualChecksComponent;
  let fixture: ComponentFixture<ExcludeIndividualChecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcludeIndividualChecksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcludeIndividualChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
