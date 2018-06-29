import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

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
