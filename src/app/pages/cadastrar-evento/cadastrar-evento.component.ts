import { Observable } from 'rxjs';
import { EventoService } from './../../services/evento.service';
import { Evento } from './../../model/evento.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-evento',
  templateUrl: './cadastrar-evento.component.html',
  styleUrls: ['./cadastrar-evento.component.css']
})
export class CadastrarEventoComponent implements OnInit {
  eventos: Observable<any[]>;
  evento: Evento;

  constructor(private eventoService: EventoService) {
    this.evento = new Evento();
  }

  ngOnInit() {
    // Ao iniciar o componente, busco todos os items já existentes no Firebase.
    this.eventos = this.eventoService.getAll();
  }

  saveEvento() {
    // Se os campos do formulario foram preenchidos, adiciono a nova tarefa.
    if (this.evento.title && this.evento.description) {
      this.eventoService.save(this.evento);
      this.evento = new Evento();
    }
  }

  editEvento(evento: Evento) {
    // Ao clicar 2x em um item da lista e vai para o formulário para ser editado.
    this.evento = evento;
  }

  remove(evento: Evento) {
    this.eventoService.remove(evento);
  }

  toggleDone(evento: Evento) {
    this.eventoService.toggleDone(evento);
  }

  filterEventos(filter: number) {
    // Filtrando os itens
    switch (filter) {
      case 1: // Todos
        this.eventos = this.eventoService.getAll();
        break;
      case 2: // Todas tarefas em aberto
        this.eventos = this.eventoService.getAllOpened();
        break;
      case 3: // Todas tarefas concluídas
        this.eventos = this.eventoService.getAllCompleted();
        break;
    }
  }
}
