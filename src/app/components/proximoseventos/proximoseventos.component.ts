import { Evento } from './../../model/evento.model';
import { EventoService } from './../../services/evento.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proximoseventos',
  templateUrl: './proximoseventos.component.html',
  styleUrls: ['./proximoseventos.component.css']
})
export class ProximoseventosComponent implements OnInit {

  eventListSub: Subscription;
  eventList: Evento[];
  filteredEvents: Evento[];
  loading: boolean;
  error: boolean;
  query: '';

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.buscarEventos();
  }

  buscarEventos() {
    this.eventoService.getAll().subscribe(
      res => {
        this.eventList = res;
        this.filteredEvents = res;
        this.loading = false;
      },
      err => {
        console.error(err);
        this.loading = false;
        this.error = true;
      }
    );
  }
}
