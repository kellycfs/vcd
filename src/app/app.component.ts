import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {

  }

  goEventos() {
    this.router.navigate(['/eventos']);
  }

  goHome() {
    this.router.navigate(['']);
  }

  goProfessores() {
    this.router.navigate(['/professores']);
  }

  goEscolas() {
    this.router.navigate(['/escolas']);
  }
  goContato() {
    this.router.navigate(['/contato']);
  }

  goUpload() {
    this.router.navigate(['/upload']);
  }


}
