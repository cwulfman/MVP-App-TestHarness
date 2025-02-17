import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { PrintPage } from './print.page';

describe('PrintPage', () => {
  let component: PrintPage;
  let fixture: ComponentFixture<PrintPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintPage ],
	imports: [IonicModule.forRoot(),
		 RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PrintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
