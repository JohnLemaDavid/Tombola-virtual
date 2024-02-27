import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTombolaComponent } from './list-tombola.component';

describe('ListTombolaComponent', () => {
  let component: ListTombolaComponent;
  let fixture: ComponentFixture<ListTombolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTombolaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTombolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
