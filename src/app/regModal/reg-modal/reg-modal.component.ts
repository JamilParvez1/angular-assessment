import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../../pages/register/register.component';

@Component({
  selector: 'app-reg-modal',
  templateUrl: './reg-modal.component.html',
  styleUrls: ['./reg-modal.component.css'],
})
export class RegModalComponent {
  signUpForm!: FormGroup;

  constructor(private dialogReg: MatDialog) {}
  onLoginClicked() {
    console.log('toggle');
    this.dialogReg.open(RegisterComponent);
  }
}
