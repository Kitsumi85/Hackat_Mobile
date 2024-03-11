import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InscriptionAtelierPage } from './inscription-atelier.page';

describe('InscriptionAtelierPage', () => {
  let component: InscriptionAtelierPage;
  let fixture: ComponentFixture<InscriptionAtelierPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InscriptionAtelierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
