import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InicialpagePage } from './inicialpage.page';

describe('InicialpagePage', () => {
  let component: InicialpagePage;
  let fixture: ComponentFixture<InicialpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicialpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InicialpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
