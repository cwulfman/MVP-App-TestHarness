import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { UserTimeOutPage } from './user-time-out.page';

describe('UserTimeOutPage', () => {
  let component: UserTimeOutPage;
  let fixture: ComponentFixture<UserTimeOutPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTimeOutPage ],
	imports: [IonicModule.forRoot(),
		 RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UserTimeOutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
