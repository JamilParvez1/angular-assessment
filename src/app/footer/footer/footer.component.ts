import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
//import { RegModalComponent } from 'src/app/regModal/reg-modal/reg-modal.component';
import { RegisterComponent } from '../../pages/register/register.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private dialogReg: MatDialog) {}

  onLoginClick() {
    this.dialogReg.open(RegisterComponent);
    console.log('reg clicked');
  }
}
