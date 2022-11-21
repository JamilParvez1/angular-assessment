import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from './pages/register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular_loginsignup';

  constructor(private dialogBox: MatDialog) {}
  openDialog() {
    this.dialogBox.open(RegisterComponent);
  }
}
