import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  signUpForm!: FormGroup;

  constructor(private dialogReg: MatDialog) {}
  onSignUpClicked() {
    console.log('toggle');
    this.dialogReg.open(RegisterComponent);
  }
}
