import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifaTombolaComponent } from './rifa-tombola.component';

describe('RifaTombolaComponent', () => {
  let component: RifaTombolaComponent;
  let fixture: ComponentFixture<RifaTombolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RifaTombolaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RifaTombolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
