/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeusChamadosComponent } from './seus-chamados.component';

describe('SeusChamadosComponent', () => {
  let component: SeusChamadosComponent;
  let fixture: ComponentFixture<SeusChamadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeusChamadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeusChamadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
