import { Evento } from './../model/evento.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class EventoService {
  angularfire: AngularFireDatabase;

  private dbPath = '/eventos';
  eventosRef: AngularFireList<Evento> = null;

  items: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.eventosRef = db.list(this.dbPath);
    this.items = this.eventosRef.valueChanges();
  }


  private handleError(error) {
    console.log(error);
  }

  getAll() {
    // Buscando todos os itens no no "/Evento"
    this.items = this.eventosRef.valueChanges();
    return this.items;
  }

  getAllCompleted() {
    // Buscando todos os itens que estão completos
    this.items = this.angularfire.list('/eventos', ref => ref.orderByChild('done').equalTo(true)).valueChanges();
    return this.items;
  }

  getAllOpened() {
    // Buscando todos os itens que estão em aberto
    this.items = this.angularfire.list('/eventos', ref => ref.orderByChild('done').equalTo(false)).valueChanges();
    return this.items;
  }

  add(evento: Evento) {
    // Adicionando uma nova tarefa.
    // Toda nova tarefa é gravada como em aberto por padrão.
    // evento.done = false;

    // Adicionando o item na lista de itens.
    // Como essa lista é carregada antes, automaticamente o angularfire2
    // identifica a mudança na lista e inclui o item novo.
    this.eventosRef.push(evento);
  }

  update(evento: Evento) {
    // Atualizando o item na lista.
    // Para isso passamos por parametro qual é o id do item no Firebase
    // e quais são os novos valores.
    this.eventosRef.update(evento.$key, evento).catch(error => this.handleError(error));
  }

  save(evento: Evento) {
    // Metodo criado para facilitar a inclusão/alteração e um item.
    // Verifico se o item tem o Id para saber se é uma inclusão ou alteração.
    if (evento.$key == null) {
      this.add(evento);
    } else {
      this.update(evento);
    }
  }

  remove(evento: Evento) {
    // Removendo um item da lista
    this.eventosRef.remove(evento.$key).catch(error => this.handleError(error));
  }

  toggleDone(evento: Evento) {
    // Marcando uma tarefa como concluída ou em aberto.
    evento.done = !evento.done;
    this.update(evento);
  }

  removeAll(): void {
    this.eventosRef.remove().catch(error => this.handleError(error));
  }

}
