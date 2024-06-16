import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortProjetComponent } from './short-projet.component';

describe('ShortProjetComponent', () => {
  let component: ShortProjetComponent;
  let fixture: ComponentFixture<ShortProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShortProjetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShortProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
