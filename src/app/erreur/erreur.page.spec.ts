import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErreurPage } from './erreur.page';

describe('ErreurPage', () => {
  let component: ErreurPage;
  let fixture: ComponentFixture<ErreurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ErreurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
