import { FilterSortService } from './../../services/filter-sort.service';
import { UtilService } from './../../services/util.service';
import { EventoService } from './../../services/evento.service';
import { Evento } from './../../model/evento.model';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit, OnDestroy {

  eventListSub: Subscription;
  eventList: Evento[];
  filteredEvents: Evento[];
  loading: boolean;
  error: boolean;
  query: '';

  constructor(
    public eventoService: EventoService,
    private utilService: UtilService,
    public fs: FilterSortService
  ) { }

  ngOnInit() {

    this._getEventList();
  }

  private _getEventList() {
    this.loading = true;
    // Get future, public events
    this.eventListSub = this.eventoService
      .getAll()
      .subscribe(
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

  searchEvents() {
    this.filteredEvents = this.fs.search(this.eventList, this.query, '_id', 'mediumDate');
  }

  resetQuery() {
    this.query = '';
    this.filteredEvents = this.eventList;
  }

  ngOnDestroy() {
    this.eventListSub.unsubscribe();
  }


}
